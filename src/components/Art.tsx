import type { DestinationId } from '../data';

export function Leaf({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M38 7C15 4 6 17 12 30c7 14 27 6 26-23Z" fill="currentColor"/><path d="M11 40 31 17M20 28l-1-10m6 6 8 1" stroke="var(--paper, #fff9e9)" strokeWidth="2.5" strokeLinecap="round"/></svg>;
}
export function BuildingArt({ id }: { id: DestinationId }) {
  const common = <><ellipse cx="80" cy="139" rx="62" ry="11" fill="#446f54" opacity=".16"/></>;
  return <svg viewBox="0 0 160 166" aria-hidden="true" className={`building-art art-${id}`}>
    {common}
    {id === 'museum' && <>
      <rect x="29" y="68" width="102" height="65" rx="5" fill="#f7edce" stroke="#aa8f63" strokeWidth="2"/>
      <path d="m19 68 61-43 61 43Z" fill="#cfaf76" stroke="#a08456" strokeWidth="3"/><path d="m29 62 51-32 51 32" fill="none" stroke="#ead6ab" strokeWidth="4"/>
      {[41,65,94,119].map(x => <g key={x}><rect x={x-5} y="76" width="10" height="45" rx="2" fill="#e3d1a4"/><rect x={x-8} y="73" width="16" height="5" rx="2" fill="#fbf2d7"/><rect x={x-8} y="118" width="16" height="6" fill="#fbf2d7"/></g>)}
      <path d="M72 132V98a8 8 0 0 1 16 0v34" fill="#80684e"/><path d="M25 134h110m-115 5h120" stroke="#d1bc8f" strokeWidth="6" strokeLinecap="round"/>
      <path d="M73 42h14v10q0 9-7 9t-7-9Zm0 3H68q-3 10 7 10m12-10h5q3 10-7 10M80 61v5m-7 0h14" fill="#f3d16d" stroke="#9b793a" strokeWidth="2"/>
    </>}
    {id === 'studio' && <>
      <rect x="35" y="75" width="95" height="60" rx="5" fill="#e9e2f1" stroke="#8e83a7" strokeWidth="2"/>
      <path d="m28 77 54-40 56 40Z" fill="#9b94bd" stroke="#746d97" strokeWidth="3"/><path d="M82 43v32m-22-14 46 0" stroke="#c7c2de" strokeWidth="2"/>
      <rect x="49" y="85" width="22" height="25" rx="9" fill="#a8d7dc" stroke="#8c83a3" strokeWidth="3"/><path d="M60 85v25M49 98h22" stroke="#eee6f4" strokeWidth="2"/>
      <rect x="94" y="89" width="23" height="46" rx="10" fill="#85809d"/><rect x="25" y="53" width="20" height="81" rx="3" fill="#cec4e0" stroke="#9286ac" strokeWidth="2"/><path d="m20 54 15-30 15 30Z" fill="#9b94bd"/><rect x="30" y="65" width="10" height="17" rx="5" fill="#b3d4df"/>
      <path d="M112 30v30m0-30 19 8-19 8" stroke="#837899" strokeWidth="2" fill="#d5b5c8"/>
      <path d="m69 119 6-14 7 14-7 12Z" fill="#99cdd8" stroke="#739aaa" strokeWidth="2"/>
    </>}
    {id === 'post' && <>
      <rect x="30" y="77" width="96" height="58" rx="5" fill="#f7deca" stroke="#ae8170" strokeWidth="2"/>
      <path d="m20 79 29-39h61l29 39Z" fill="#cc8173" stroke="#aa655a" strokeWidth="3"/><path d="M42 53h77M33 65h94" stroke="#e7a395" strokeWidth="3"/>
      <rect x="84" y="97" width="25" height="38" rx="12" fill="#b77563"/><rect x="40" y="92" width="26" height="24" rx="4" fill="#afdad5" stroke="#b68473" strokeWidth="3"/><path d="M53 93v23M40 104h26" stroke="#fff0d9" strokeWidth="3"/>
      <rect x="65" y="52" width="29" height="19" rx="3" fill="#fff0d9"/><path d="m66 54 13 9 14-9" fill="none" stroke="#bd7d70" strokeWidth="2"/>
      <path d="M137 116v22" stroke="#94775c" strokeWidth="4"/><path d="M128 103q0-11 11-11t10 11v17h-21Z" fill="#cc8173" stroke="#a16961" strokeWidth="2"/><path d="M132 105h13" stroke="#744e47" strokeWidth="3"/>
      <rect x="98" y="28" width="12" height="15" fill="#b67d6c"/>
    </>}
    {id === 'lab' && <>
      <rect x="27" y="84" width="103" height="51" rx="10" fill="#dfe9e4" stroke="#799c9c" strokeWidth="2"/>
      <path d="M22 84a58 49 0 0 1 116 0Z" fill="#83b4bc" stroke="#5d919b" strokeWidth="3"/><path d="M81 37c-28 5-32 30-32 46m32-46c27 5 32 30 32 46M26 70h108" fill="none" stroke="#b8d7d5" strokeWidth="3"/>
      <rect x="71" y="99" width="25" height="36" rx="12" fill="#6f9392"/><rect x="38" y="97" width="19" height="18" rx="6" fill="#b1e6d7" stroke="#78a39f" strokeWidth="2"/><rect x="109" y="97" width="13" height="18" rx="4" fill="#b1e6d7"/>
      <path d="M80 37V22m0 0 18-12" stroke="#77949b" strokeWidth="3"/><ellipse cx="98" cy="13" rx="12" ry="4" transform="rotate(-35 98 13)" fill="#e5eeee" stroke="#77949b" strokeWidth="2"/>
      <path d="M17 111v23m-9-16h18" stroke="#8b9c87" strokeWidth="3"/><rect x="4" y="103" width="26" height="17" rx="3" fill="#577d8b"/><path d="M7 107h20m-13-3-3 14m11-14-3 14" stroke="#a7c8ce" strokeWidth="1.5"/>
    </>}
    {id === 'cabin' && <>
      <rect x="31" y="78" width="100" height="58" rx="4" fill="#edcf99" stroke="#a88a5d" strokeWidth="2"/>
      <path d="m19 80 62-48 61 48Z" fill="#829b68" stroke="#657f52" strokeWidth="3"/><path d="m32 73 49-37 48 37" fill="none" stroke="#a9bf8b" strokeWidth="3"/>
      <path d="M35 94h92m-92 15h92m-92 15h92" stroke="#d3b37e" strokeWidth="2"/><rect x="72" y="99" width="26" height="37" rx="12" fill="#a17d53"/><circle cx="81" cy="67" r="12" fill="#cce2b4" stroke="#e3dbb0" strokeWidth="4"/><path d="M81 56v23M70 67h22" stroke="#889a6c" strokeWidth="2"/>
      <rect x="40" y="97" width="21" height="19" rx="3" fill="#cee0ac" stroke="#a58c65" strokeWidth="2"/><path d="M50 98v17" stroke="#f8e5bc" strokeWidth="3"/>
      <rect x="105" y="38" width="13" height="26" rx="2" fill="#bba07b"/><path className="smoke" d="M112 28q-12-10 1-17" stroke="#fff5df" strokeWidth="5" strokeLinecap="round" fill="none" opacity=".65"/>
      <path d="M110 116v19m-5-12h17" stroke="#759369" strokeWidth="3"/><circle cx="109" cy="118" r="5" fill="#e5a99a"/><circle cx="119" cy="123" r="4" fill="#f3d781"/>
    </>}
  </svg>;
}

function Tree({ x, y, scale = 1, pine = false }: {x: number; y: number; scale?: number; pine?: boolean}) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}><ellipse cy="23" rx="23" ry="8" fill="#456e4e" opacity=".16"/><path d="M0-3v27" stroke="#987653" strokeWidth="9" strokeLinecap="round"/>{pine ? <><path d="m0-69-28 44h13l-23 32h76L15-25h13Z" fill="#589b78" stroke="#478364" strokeWidth="2"/><path d="m-9-30 9-23 11 23" fill="#7fba91"/></> : <><path d="M-29-21c-20-20-2-47 15-44 8-22 37-18 41 1 29 0 32 39 9 46-16 17-43 16-65-3Z" fill="#68ad80" stroke="#55996f" strokeWidth="2"/><ellipse cx="-12" cy="-52" rx="15" ry="10" fill="#87c693"/><circle cx="20" cy="-30" r="5" fill="#f1c487"/><circle cx="-19" cy="-34" r="4" fill="#f1c487"/></>}</g>;
}
function Flower({x,y,color='#e7a5a4'}: {x:number;y:number;color?:string}) {
  return <g transform={`translate(${x} ${y})`}><path d="M0 0v10m0-3-5-3" stroke="#679b63" strokeWidth="2"/><path d="M0-5c-8-9-12 2-6 4-7 8 4 10 6 4 7 7 12-3 6-4 5-8-5-12-6-4" fill={color}/><circle r="2.5" fill="#fff1be"/></g>;
}
export function IslandScene({night}: {night:boolean}) {
  return <svg className="island-scene" viewBox="0 0 1000 680" aria-hidden="true">
    <defs><pattern id="waves" width="110" height="80" patternUnits="userSpaceOnUse"><path d="M15 35q10 7 20 0m35 24q10 7 20 0" stroke="var(--wave)" strokeWidth="2" fill="none" opacity=".5"/></pattern><pattern id="grass" width="49" height="45" patternUnits="userSpaceOnUse"><path d="m12 26 2-5 3 5m24-14 2-3 2 3" stroke="#68a87c" strokeWidth="1.5" opacity=".45" fill="none"/></pattern><linearGradient id="land" x2="0" y2="1"><stop stopColor="var(--grass-top)"/><stop offset="1" stopColor="var(--grass-bottom)"/></linearGradient></defs>
    <rect width="1000" height="680" fill="url(#waves)"/>
    <g className="clouds" fill="var(--cloud)" opacity=".7"><path d="M89 99c-20-6-15-27 3-28 3-25 39-28 48-7 29-5 40 33 15 37Z"/><path d="M795 98c-23-2-20-30 3-30 8-28 44-28 51-2 29-4 34 33 11 34Z"/></g>
    {night && <g fill="#f5e9bb"><circle cx="99" cy="57" r="2"/><circle cx="702" cy="49" r="2"/><circle cx="897" cy="172" r="2"/><path d="M875 35a24 24 0 1 0 23 32 23 23 0 0 1-23-32"/></g>}
    <path d="M164 216C178 130 303 91 401 111c97-56 220-27 279 32 102-2 168 71 162 153 80 62 45 177-35 215-44 103-206 130-309 98-115 47-245 18-295-50-96-7-145-87-125-155-62-67-19-165 86-188Z" fill="none" stroke="var(--wave)" strokeWidth="23" opacity=".6"/>
    <path d="M164 216C178 130 303 91 401 111c97-56 220-27 279 32 102-2 168 71 162 153 80 62 45 177-35 215-44 103-206 130-309 98-115 47-245 18-295-50-96-7-145-87-125-155-62-67-19-165 86-188Z" fill="var(--sand)" stroke="#d9c496" strokeWidth="2"/>
    <path d="M182 216C202 146 317 115 403 135c91-55 211-24 265 32 93-3 159 60 151 137 69 62 24 144-47 181-33 91-174 124-275 93-105 46-222 11-271-53-78-8-121-63-99-127-64-60-23-150 55-182Z" fill="url(#land)" stroke="#82b98c" strokeWidth="3"/>
    <path d="M182 216C202 146 317 115 403 135c91-55 211-24 265 32 93-3 159 60 151 137 69 62 24 144-47 181-33 91-174 124-275 93-105 46-222 11-271-53-78-8-121-63-99-127-64-60-23-150 55-182Z" fill="url(#grass)"/>
    <path d="M302 259q30 65 150 87t190-89M451 346q-51 64-220 91m220-91q135-6 310 71M451 346q28 83 65 179" fill="none" stroke="#bcba87" strokeWidth="34" strokeLinecap="round"/><path d="M302 259q30 65 150 87t190-89M451 346q-51 64-220 91m220-91q135-6 310 71M451 346q28 83 65 179" fill="none" stroke="var(--path)" strokeWidth="28" strokeLinecap="round"/>
    <path d="M563 130c-34 66-49 82-3 133 70 62 87 46 93 132 3 44 50 64 117 78" fill="none" stroke="#7fb9ae" strokeWidth="35"/><path d="M563 130c-34 66-49 82-3 133 70 62 87 46 93 132 3 44 50 64 117 78" fill="none" stroke="var(--river)" strokeWidth="27"/>
    <g transform="translate(609 323) rotate(23)"><rect x="-26" y="-20" width="65" height="42" rx="3" fill="#b09369" stroke="#897452" strokeWidth="2"/>{[-15,-4,7,18,29].map(x=><path key={x} d={`M${x}-19v39`} stroke="#e0c395" strokeWidth="4"/>)}<path d="M-29-21h71m-71 44h71" stroke="#8c7451" strokeWidth="5" strokeLinecap="round"/></g>
    <ellipse cx="418" cy="474" rx="39" ry="24" fill="#78b4a5"/><ellipse cx="418" cy="470" rx="33" ry="20" fill="var(--river)"/><ellipse cx="405" cy="468" rx="8" ry="4" fill="#9fca88"/><path d="m434 472 10-6" stroke="#c8e6d0" strokeWidth="2"/>
    {[[206,230,1],[389,200,.85],[463,167,.75],[742,243,1],[809,311,.65],[165,366,.8],[326,430,.8],[367,539,.8],[664,528,1],[733,504,.6],[422,280,.6],[288,527,.65],[702,177,.6]].map(([x,y,s],i)=><Tree key={i} x={x} y={y} scale={s} pine={i%3===0}/>)}
    {[[190,423],[201,447],[306,314],[322,324],[705,298],[716,313],[567,556],[588,547],[354,496],[352,510],[689,440],[704,450]].map(([x,y],i)=><Flower key={i} x={x} y={y} color={i%3===0?'#fff0b2':i%3===1?'#e6a0a2':'#d3bfec'}/>)}
    <g transform="translate(460 359)"><ellipse cy="10" rx="35" ry="19" fill="#c6c39b"/><ellipse cy="7" rx="28" ry="15" fill="#eee0b7"/><path d="M-19 6h38M0-4v20" stroke="#d4c399" strokeWidth="2"/><path d="M0-7v-29m-5 1h10" stroke="#8c7957" strokeWidth="4"/><path d="m0-36 26 7L0-20Z" fill="#f5e9c6"/><path d="m9-31 8 3-8 2" fill="#6eab86"/></g>
    <g transform="translate(488 599) rotate(7)"><path d="M-21 0v65h43V0" fill="#b59568" stroke="#927e5c" strokeWidth="2"/>{[8,20,32,44,56].map(y=><path key={y} d={`M-20 ${y}h41`} stroke="#dec299" strokeWidth="3"/>)}<path d="M-25-4v17m50-17v17m-50 34v20m50-20v20" stroke="#8a7354" strokeWidth="5"/></g>
    <g transform="translate(765 572) rotate(-14)"><ellipse rx="37" ry="10" fill="#c3b28b" opacity=".4"/><path d="M-30-5q30 24 59 0Z" fill="#f1e1b9" stroke="#ab8c61" strokeWidth="2"/><path d="M0-5v-53l-23 48h23" fill="#fff3d7" stroke="#b79b71" strokeWidth="2"/><path d="M3-53 26-12H3Z" fill="#dbac98"/></g>
    <g transform="translate(131 494)"><path d="M0 0q-15-16-23-1m23 1q15-16 23-1" stroke="#a59070" strokeWidth="3" fill="none"/><path d="M-7 15q8-9 17-1" stroke="#ebd9af" strokeWidth="4" fill="none"/></g>
    <g transform="translate(855 403)"><ellipse rx="18" ry="10" fill="#a5b7af"/><ellipse cy="-5" rx="13" ry="9" fill="#becac0"/></g>
    <g fill="none" stroke="var(--wave)" strokeWidth="2" className="sea-ripples"><path d="M210 604q15 10 30 0m-20 12q10 6 22 0M838 540q20 12 40 0M104 268q12 8 25 0"/></g>
    <text x="78" y="624" fill="var(--map-ink)" fontSize="11" letterSpacing="3">JACK’S ISLAND</text><path d="M919 570v40m-9-29 9-12 9 12" stroke="var(--map-ink)" strokeWidth="2" fill="none"/><text x="914" y="559" fill="var(--map-ink)" fontSize="13">N</text>
  </svg>;
}
