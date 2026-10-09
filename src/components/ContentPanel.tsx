import { useEffect, useRef, useState } from 'react';
import { Button, Card, Progress } from 'animal-island-ui';
import { destinations, games, routes, poems, experiments, learning, type Destination } from '../data';
import { BuildingArt, Leaf } from './Art';

function Museum() {
  const [detail, setDetail] = useState<number | null>(null);
  return <div className="game-list">{games.map((game, index) => <Card key={game.title} className="game-card"><div className="game-cover" style={{ background: game.color }}><span>{game.subtitle}</span><strong>{game.mark}</strong><small>JACK’S COLLECTION</small></div><div className="game-meta"><h3>{game.title}</h3><span className="completion">全成就达成</span><Progress percent={100} size="small" duration={0} aria-label={`${game.title}成就进度`} infoFormat={() => game.count}/><button className="detail-button" aria-expanded={detail === index} onClick={() => setDetail(detail === index ? null : index)}>{detail === index ? '收起记录' : '查看收藏记录'} <span aria-hidden="true">↗</span></button>{detail === index && <p className="record-detail">{game.detail}</p>}</div></Card>)}<p className="source-note">成就记录来自岛主提供的资料。封面为原创排版，未使用官方游戏素材。</p></div>;
}
function Studio() {
  const [route, setRoute] = useState<typeof routes[number]>('BLUE');
  return <><div className="studio-cover"><span>FAN DLC · NARRATIVE DESIGN</span><strong>GLASS<br/>HEAVEN</strong><span>四条路线，四份设计档案</span><div className="crystal"/></div><p>《赛博朋克 2077》同人 DLC 设计项目。</p><div className="route-grid" aria-label="叙事路线">{routes.map((r,i)=><button key={r} aria-pressed={route===r} className={route===r?'active':''} onClick={()=>setRoute(r)}><small>ROUTE 0{i+1}</small>{r}</button>)}</div><Card className="route-detail"><span className="eyebrow">当前路线档案</span><h3>{route}</h3><p>已收录路线名称。任务机制与剧情原稿尚未接入；这里保留给经过确认的设计内容。</p></Card><p className="source-note">个人同人创作展示，与官方无关联。</p></>;
}
function PostOffice() {
  const [page, setPage] = useState(0);
  return <><div className="poem-tabs">{poems.map((p,i)=><button key={p} onClick={()=>setPage(i)} aria-pressed={page===i} className={page===i?'active':''}>{p}</button>)}</div><article className="letter"><div className="letter-top"><span>FROM JACK · 致路过的你</span><div className="letter-stamp"><Leaf/>江城来信</div></div><span className="eyebrow">原创诗词 · 作品 {String(page+1).padStart(2,'0')}</span><h3>《{poems[page]}》</h3><div className="ruled-paper"><p>信封已经备好，<br/>等待岛主放入原文。</p></div><p className="source-note">目前仅获得作品标题，完整诗文待补充。</p><div className="letter-sign">Jack</div></article><div className="page-controls"><Button size="small" disabled={page===0} onClick={()=>setPage(page-1)}>上一封</Button><span>{page+1} / {poems.length}</span><Button size="small" disabled={page===poems.length-1} onClick={()=>setPage(page+1)}>下一封</Button></div></>;
}
function Lab() {
  const [open,setOpen] = useState<number|null>(0);
  return <><div className="lab-banner"><span className="lab-orbit"><span/></span><div><span className="eyebrow">CURIOSITY IN PROGRESS</span><h3>保持好奇，持续实验</h3></div></div>{experiments.map((e,i)=><Card key={e.title} className="experiment"><button aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)}><span><small>EXPERIMENT 0{i+1} · {e.type}</small><strong>{e.title}</strong></span><span aria-hidden="true">{open===i?'−':'+'}</span></button>{open===i&&<div className="experiment-note"><p>{e.text}</p><p className="source-note">项目已列入展示目录。演示链接、实验结果与代码资料待补充。</p></div>}</Card>)}</>;
}
function Cabin() {
  return <><div className="cabin-banner"><span className="eyebrow">ONE SMALL STEP AT A TIME</span><h3>今天，也向前一点点。</h3><p>通信工程 · 编程学习 · 游戏开发</p></div><h3 className="section-title">我的学习路线</h3><ol className="learning-path">{learning.map((s,i)=><li key={s}><span>{String(i+1).padStart(2,'0')}</span><div><h4>{s}</h4><p>{['编程基础','组织数据与理解算法','版本管理与协作','把知识变成作品','未来游戏开发方向'][i]}</p></div></li>)}</ol><Card className="future-note"><span className="eyebrow">写给未来的自己</span><h3>做一款属于自己的游戏</h3><p>从小项目开始，沿着学习路线逐步积累。</p></Card><p className="source-note">此处展示学习计划，尚未获得实际完成进度。</p></>;
}
export default function ContentPanel({ destination, onClose, onVisit }: {destination:Destination|null;onClose:()=>void;onVisit:(id:Destination['id'])=>void}) {
  const heading = useRef<HTMLHeadingElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(()=>{ panel.current?.scrollTo({top:0}); if(destination) heading.current?.focus({preventScroll:true}); },[destination]);
  return <aside ref={panel} className={`content-panel ${destination?'has-destination':''}`} aria-label="岛屿指南与建筑内容" onKeyDown={e=>{if(e.key==='Escape'&&destination)onClose();}}>
    {destination ? <><div className="panel-heading"><span className="eyebrow">{destination.en}</span><Button size="small" type="text" onClick={onClose} aria-label="返回主地图">关闭 ×</Button></div><h2 ref={heading} tabIndex={-1}>{destination.name}</h2><p className="panel-description">{destination.description}</p><div className="arrival-badge">✓ 邮戳已收入旅行护照</div><div className="panel-content" key={destination.id}>{destination.id==='museum'?<Museum/>:destination.id==='studio'?<Studio/>:destination.id==='post'?<PostOffice/>:destination.id==='lab'?<Lab/>:<Cabin/>}</div><Button block onClick={onClose} className="return-button">返回主地图</Button></> : <><span className="eyebrow">YOUR LITTLE ISLAND GUIDE</span><h2>嘿，欢迎登岛！</h2><div className="welcome-art"><BuildingArt id="cabin"/><span className="welcome-sun"/><Leaf className="welcome-leaf"/></div><p className="welcome-text">我是 Jack。<br/>把喜欢的游戏、写下的诗，<br/>和脑海里的小小想法，<br/>都安放在了这座岛上。</p><div className="guide-divider"><Leaf/></div><p className="guide-hint">选一座小屋，开始你的旅行。<br/>每次到访，都会留下一枚邮戳。</p><div className="destination-list">{destinations.map((d,i)=><button key={d.id} onClick={()=>onVisit(d.id)}><span style={{color:d.color}}>0{i+1}</span><strong>{d.name}</strong><span aria-hidden="true">↗</span></button>)}</div><span className="slow-note">不用赶路，慢慢逛就好。</span></>}
  </aside>;
}
