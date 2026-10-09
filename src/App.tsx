import { useEffect, useRef, useState } from 'react';
import { Button } from 'animal-island-ui';
import { destinations, type DestinationId } from './data';
import { readState, saveState, visit } from './state.mjs';
import { Leaf } from './components/Art';
import IslandMap from './components/IslandMap';
import ContentPanel from './components/ContentPanel';
import Passport from './components/Passport';

export default function App() {
  const [state,setState] = useState(()=>{try{return readState(window.localStorage);}catch{return {visited:[] as string[],night:false};}});
  const [selected,setSelected] = useState<DestinationId|null>(null);
  const [celebrating,setCelebrating] = useState(false);
  const [notice,setNotice] = useState('');
  const [storageUnavailable,setStorageUnavailable] = useState(false);
  const lastTrigger = useRef<HTMLElement|null>(null);
  const destination = destinations.find(d=>d.id===selected)??null;
  useEffect(()=>{try{setStorageUnavailable(!saveState(window.localStorage,state));}catch{setStorageUnavailable(true);}},[state]);
  useEffect(()=>{if(!celebrating)return;const timer=window.setTimeout(()=>setCelebrating(false),6500);return()=>window.clearTimeout(timer);},[celebrating]);
  function explore(id:DestinationId) {
    lastTrigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const next = visit(state.visited,id);
    if(next.length===5&&state.visited.length<5)setCelebrating(true);
    setState({...state,visited:next});setSelected(id);
    setNotice(`${destinations.find(d=>d.id===id)!.name}：${next.length>state.visited.length?'获得一枚新邮戳':'欢迎再次到访'}。探索进度 ${next.length}/5。`);
    if(window.matchMedia('(max-width: 900px)').matches)window.requestAnimationFrame(()=>document.querySelector('.content-panel')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'}));
  }
  function focusMap(target: HTMLElement | null) {
    window.requestAnimationFrame(()=>{
      target?.focus({preventScroll:true});
      if(window.matchMedia('(max-width: 900px)').matches)document.querySelector('.map-card')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    });
  }
  function close() {
    const target=lastTrigger.current?.isConnected?lastTrigger.current:document.getElementById(`building-${selected}`);
    setSelected(null);focusMap(target);
  }
  function reset() {setState({...state,visited:[]});setSelected(null);setCelebrating(false);setNotice('旅行护照已重置。可以开始一次新的小岛旅行。');focusMap(document.getElementById('building-museum'));}
  return <div className={`island-app ${state.night?'night':'day'}`}>
    <header className="site-header"><a className="brand" href="#main-map"><span className="brand-mark"><Leaf/></span><span>Jack’s Island<small>A LITTLE WORLD OF MINE</small></span></a><div className="header-actions"><span className="island-time">{state.night?'晚安，小岛':'今日宜探索'}</span><Button className="theme-button" onClick={()=>setState({...state,night:!state.night})} aria-pressed={state.night} aria-label={state.night?'切换白天':'切换夜晚'}><span aria-hidden="true">{state.night?'☾':'☀'}</span> {state.night?'夜晚':'白天'}</Button></div></header>
    <main id="main-map"><section className="intro"><span className="intro-kicker"><span/> WELCOME TO MY ISLAND <span/></span><h1>每个热爱，都有一座小屋。</h1><p>一座收藏游戏、诗歌与奇思妙想的小岛。随便逛逛，发现我的一点点世界。</p><div className="intro-actions"><span className="explore-pill">五座小屋 · 无限好奇</span><Button type="primary" onClick={()=>{const choices=destinations.filter(d=>d.id!==selected);explore(choices[Math.floor(Math.random()*choices.length)].id);}}>带我随机漫游 <span aria-hidden="true">↗</span></Button></div></section>
    <div className="exploration-layout"><IslandMap selected={selected} visited={state.visited} night={state.night} onVisit={explore}/><ContentPanel destination={destination} onClose={close} onVisit={explore}/></div>
    <Passport visited={state.visited} onReset={reset}/>
    <div className="sr-only" role="status" aria-live="polite">{notice}</div>{storageUnavailable&&<p className="storage-warning" role="status">浏览器未允许本地保存；本次探索仍可进行，刷新后进度可能丢失。</p>}
    </main><footer><span><Leaf/> 用好奇心建造，用热爱填满。</span><span>Jack’s Island · 个人数字小岛</span></footer>
    {celebrating&&<div className="celebration" role="status"><div className="confetti" aria-hidden="true">{Array.from({length:32},(_,i)=><i key={i} style={{left:`${i*3.2}%`,animationDelay:`${(i%7)*.13}s`,background:['#ddb967','#e6a394','#85bea6','#a9a0ce'][i%4]}}/>)}</div><div className="celebration-card"><Leaf/><div><strong>全岛探索完成！</strong><p>五枚邮戳，五份热爱。谢谢你来过我的小岛。</p></div><Button size="small" onClick={()=>setCelebrating(false)} aria-label="关闭庆祝">收好回忆</Button></div></div>}
  </div>;
}
