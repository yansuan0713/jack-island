import { Button } from 'animal-island-ui';
import { destinations } from '../data';
import { BuildingArt } from './Art';
export default function Passport({visited,onReset}: {visited:string[];onReset:()=>void}) {
  return <section className="passport" aria-label="旅行护照"><div className="passport-intro"><span className="eyebrow">ISLAND PASSPORT</span><h2>我的小岛旅行护照</h2><p>每一次到访，都值得纪念。</p></div><div className="stamps">{destinations.map(d=><div key={d.id} className={`stamp ${visited.includes(d.id)?'collected':''}`} style={{'--stamp-color':d.color} as React.CSSProperties}><BuildingArt id={d.id}/><span>{d.short}</span><small>{visited.includes(d.id)?'已盖章':'待探索'}</small></div>)}</div><div className="passport-progress"><strong aria-live="polite">{visited.length}<small> / 5</small></strong><span>{visited.length===5?'全岛探索完成':'枚旅行邮戳'}</span><Button type="text" size="small" onClick={onReset} disabled={visited.length===0}>重置护照</Button></div></section>;
}
