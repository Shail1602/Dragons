import { useMemo, useState } from 'react';
import './App.css';
import { eras, globalSearch } from './data/world';

const houseSigils = ['♜','♛','☲','♞','✹','♆','☀','△'];

function Header({active, setActive}) {
  return <header className="topbar">
    <div className="brand"><span className="sword">♕</span><span>The Iron Throne</span></div>
    <nav className="tabs">
      {Object.values(eras).map(e => <button key={e.key} onClick={()=>setActive(e.key)} className={active===e.key?'active':''}>{e.title}</button>)}
    </nav>
    <div className="navlinks"><a href="#timeline">Timeline</a><a href="#houses">Houses</a><a href="#characters">Characters</a><a href="#map">Map</a><a href="#quiz">Quiz</a><span>⚙</span></div>
  </header>
}

function Hero({era}) {
  return <section className={`hero ${era.key}`}>
    <video className="heroVideo" src={era.video} autoPlay muted loop playsInline poster={era.heroImage}/>
    <div className="emberLayer" />
    <div className="heroShade" />
    <div className="heroContent">
      <p className="kicker">Interactive Dynasty Experience</p>
      <h1>{era.title}</h1>
      <h2>{era.subtitle}</h2>
      <p>{era.intro}</p>
      <div className="heroActions"><a href="#timeline">{era.navCta}</a><a className="ghost" href="#characters">Meet the Players</a></div>
    </div>
    <div className="commandPanel">
      <span>Live Lore Engine</span><strong>{era.timeline.length}</strong><small>timeline chapters</small>
      <strong>{era.characters.length}</strong><small>featured characters</small>
    </div>
  </section>
}

function SearchBar() {
 const [q,setQ]=useState('');
 const results=useMemo(()=> q.trim()?globalSearch.filter(x => `${x.name} ${x.role} ${x.era} ${x.category}`.toLowerCase().includes(q.toLowerCase())).slice(0,6):[],[q]);
 return <section className="searchDock"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search character, dragon, battle, house or location..." />{results.length>0 && <div className="results">{results.map((r,i)=><div key={i}><b>{r.name}</b><span>{r.category} · {r.era}</span><p>{r.role}</p></div>)}</div>}</section>
}

function Timeline({era}){return <section id="timeline" className="section"><div className="sectionTitle"><span>01</span><h2>{era.title} Timeline</h2><p>Major turning points shown as a cinematic war-room board.</p></div><div className="timeline">{era.timeline.map((t,i)=><article key={t[0]} style={{'--i':i}}><div className="pin">{i+1}</div><h3>{t[0]}</h3><p>{t[1]}</p></article>)}</div></section>}

function Houses({era}){return <section id="houses" className="section"><div className="sectionTitle"><span>02</span><h2>Great Houses</h2><p>Clickable style house cards using your original kingdom concept.</p></div><div className="houses">{era.houses.map((h,i)=><article key={h}><div className="sigil">{houseSigils[i%houseSigils.length]}</div><h3>{h}</h3><p>{era.key==='got'?'Oath, banner, conflict and claim across Westeros.':'Bloodline, ambition, dragon politics and succession stakes.'}</p></article>)}</div></section>}

function Characters({era}){return <section id="characters" className="section"><div className="sectionTitle"><span>03</span><h2>Characters with Photos</h2><p>Portrait cards, status, houses, quotes and story tags.</p></div><div className="characters">{era.characters.map(c=><article className="character" key={c.name}><img src={c.image}/><div className="charInfo"><span>{c.status}</span><h3>{c.name}</h3><h4>{c.role}</h4><p>{c.house}</p><blockquote>“{c.quote}”</blockquote><div>{c.tags.map(t=><em key={t}>{t}</em>)}</div></div></article>)}</div></section>}

function Dragons({era}){if(!era.dragons)return null; return <section className="section dragons"><div className="sectionTitle"><span>04</span><h2>Targaryen Dragons</h2><p>Dedicated dragon gallery for HOTD.</p></div><div className="dragonGrid">{era.dragons.map(d=><article key={d.name}><img src={d.image}/><h3>{d.name}</h3><p>Rider: {d.rider}</p></article>)}</div></section>}

function Map({era}){const [selected,setSelected]=useState(era.mapPoints[0]); return <section id="map" className="section mapSection"><div className="sectionTitle"><span>05</span><h2>Interactive Map</h2><p>Westeros war map with clickable locations.</p></div><div className="mapWrap"><div className="mapCanvas"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M42 4 C50 15 45 28 54 39 C63 49 61 63 56 78 C51 92 42 94 35 84 C27 72 31 60 26 49 C19 35 28 19 42 4Z"/><path d="M60 50 C72 54 80 65 75 78 C69 88 58 78 61 67Z"/></svg>{era.mapPoints.map(p=><button className="mapPoint" style={{left:p.x+'%', top:p.y+'%'}} onClick={()=>setSelected(p)} key={p.name}><span/></button>)}</div><aside className="mapCard"><h3>{selected.name}</h3><b>{selected.type}</b><p>{selected.desc}</p><small>{era.title}</small></aside></div></section>}

function Quiz({era}){return <section id="quiz" className="section quiz"><div className="sectionTitle"><span>06</span><h2>Dynasty Quiz</h2><p>Personality style quiz module retained and redesigned for the full product.</p></div><div className="quizCard"><h3>Which side would choose you?</h3><p>{era.key==='got'?'The North, the Crown, the Dragon, or the Shadows?':'The Blacks, the Greens, Driftmark, or the Dragonkeepers?'}</p><button>Begin the Trial</button></div></section>}

function App(){const [active,setActive]=useState('got'); const era=eras[active]; return <main className={active}><Header active={active} setActive={setActive}/><Hero era={era}/><SearchBar/><Timeline era={era}/><Houses era={era}/><Characters era={era}/><Dragons era={era}/><Map era={era}/><Quiz era={era}/><footer>© 2026 The Iron Throne · Fan-built cinematic companion app · Uses your original GOT project assets plus HOTD expansion</footer></main>}
export default App;
