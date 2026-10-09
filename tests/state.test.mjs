import { test } from 'node:test';
import assert from 'node:assert/strict';
import { IDS, STORAGE_KEY, readState, sanitizeState, saveState, visit } from '../src/state.mjs';
test('malformed, stale and duplicate storage are safe',()=>{
  assert.deepEqual(sanitizeState({visited:['museum','museum','unknown',null],night:'true'}),{visited:['museum'],night:false});
  for(const raw of ['null','{','[]','42']) assert.deepEqual(readState({getItem:()=>raw}),{visited:[],night:false});
});
test('all five stamps are collected exactly once',()=>{
  let visited=[];for(const id of IDS){visited=visit(visited,id);visited=visit(visited,id);}assert.deepEqual(visited,IDS);assert.deepEqual(visit(visited,'bad'),IDS);
});
test('persistence and reset preserve only application data',()=>{
  const map=new Map([['other-app','keep']]);const storage={getItem:key=>map.get(key),setItem:(key,value)=>map.set(key,value)};
  saveState(storage,{visited:IDS,night:true});assert.deepEqual(readState(storage),{visited:IDS,night:true});
  saveState(storage,{visited:[],night:true});assert.deepEqual(readState(storage),{visited:[],night:true});assert.equal(map.get('other-app'),'keep');assert.ok(map.has(STORAGE_KEY));
});
test('blocked storage does not crash exploration',()=>{
  const storage={getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}};
  assert.deepEqual(readState(storage),{visited:[],night:false});assert.equal(saveState(storage,{visited:IDS,night:true}),false);
});
