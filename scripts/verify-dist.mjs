import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const base = '/jack-island/';
const root = path.resolve('dist');
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const htmlAssets = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(match => match[1]);
assert.ok(htmlAssets.some(asset => asset.endsWith('.js')), 'No production JavaScript entry');
assert.ok(htmlAssets.some(asset => asset.endsWith('.css')), 'No production stylesheet');
assert.ok(htmlAssets.includes(`${base}favicon.svg`), 'Favicon must use Pages base');

async function checkAsset(url, fromFile = 'index.html') {
  if (/^(data:|https?:|#)/.test(url)) return;
  const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
  if (pathname.startsWith('/')) assert.ok(pathname.startsWith(base), `Wrong base: ${url}`);
  const relative = pathname.startsWith(base) ? pathname.slice(base.length) : path.join(path.dirname(fromFile), pathname);
  const filename = path.resolve(root, relative);
  assert.ok(filename.startsWith(`${root}${path.sep}`), 'Asset path escapes dist');
  assert.ok((await stat(filename)).isFile(), `Missing asset: ${url}`);
}
for (const url of htmlAssets) await checkAsset(url);
const assets = await readdir(path.join(root, 'assets'));
let cssReferences = 0;
for (const file of assets.filter(file => file.endsWith('.css'))) {
  const css = await readFile(path.join(root, 'assets', file), 'utf8');
  for (const match of css.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/g)) {
    await checkAsset((match[1] ?? match[2] ?? match[3]).trim(), `assets/${file}`);
    cssReferences++;
  }
}
for (const license of await readdir('public/licenses')) {
  assert.equal(await readFile(path.join(root, 'licenses', license), 'utf8'), await readFile(path.join('public/licenses', license), 'utf8'), `License altered or omitted: ${license}`);
}
console.log(`Pages artifact verified: ${htmlAssets.length} HTML assets, ${cssReferences} CSS references, all licenses retained.`);
