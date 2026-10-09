import { destinations, type DestinationId } from '../data';
import { BuildingArt, IslandScene } from './Art';

export default function IslandMap({ selected, visited, night, onVisit }: { selected: DestinationId | null; visited: string[]; night: boolean; onVisit: (id: DestinationId) => void }) {
  const active = destinations.find(d => d.id === selected);
  return <section className="map-card" aria-label="可探索的岛屿地图">
    <div className="map-top"><span><i className="live-dot"/> 岛屿开放中</span><span>{night ? '月光漫步' : '晴天 · 微风'} <span className="weather-symbol">{night ? '☾' : '☀'}</span></span></div>
    <div className="map-viewport">
      <IslandScene night={night}/>
      {destinations.map((d, index) => <button id={`building-${d.id}`} key={d.id} className={`building ${selected === d.id ? 'selected' : ''}`} style={{ left: `${d.x}%`, top: `${d.y}%` }} onClick={() => onVisit(d.id)} aria-label={`探索${d.name}`} aria-pressed={selected === d.id}>
        <BuildingArt id={d.id}/><span className="building-label"><span className="building-number">0{index+1}</span>{d.short}{visited.includes(d.id) && <span className="visited-check" aria-label="已访问">✓</span>}</span>
      </button>)}
      <div className="traveler" style={{ left: `${active ? active.x : 46}%`, top: `${active ? active.y + 12 : 54}%` }} aria-hidden="true"><svg viewBox="0 0 34 46"><ellipse cx="17" cy="42" rx="12" ry="3" fill="#56715b" opacity=".22"/><path d="M11 35v7m12-7v7" stroke="#826b52" strokeWidth="4" strokeLinecap="round"/><path d="M8 36V24q9-9 18 0v12Z" fill="#eee2b7" stroke="#a4926e" strokeWidth="1.5"/><path d="M9 24 3 33m23-9 5 9" stroke="#d9b68d" strokeWidth="4" strokeLinecap="round"/><circle cx="17" cy="15" r="9" fill="#f0cba3"/><path d="M7 11c0-15 22-15 21 0Z" fill="#c39570"/><ellipse cx="17" cy="10" rx="15" ry="3" fill="#e3c195"/><circle cx="14" cy="16" r="1" fill="#765f49"/><circle cx="21" cy="16" r="1" fill="#765f49"/><path d="M14 21q3 2 6 0" stroke="#b28364" fill="none"/></svg></div>
    </div>
    <div className="map-bottom"><span><span className="tiny-leaf">✦</span> 点击小屋，发现一份热爱</span><span>用 Tab 和 Enter 也可以探索</span></div>
  </section>;
}
