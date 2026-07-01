import { useMemo, useState } from 'react'
import './App.css'

const img = (name) => `/images/${name}`

const got = {
  key: 'got',
  label: 'Game of Thrones',
  eyebrow: 'Winter, war and the wheel',
  title: 'Game of Thrones',
  subtitle: 'Explore Westeros through houses, characters, battles and the full road to the Iron Throne.',
  accent: '#8ec7ff',
  hero: img('drogon-flight.jpg'),
  cards: [img('one.jpg'), img('five.jpg'), img('six.jpg')],
  houses: ['Stark', 'Lannister', 'Targaryen', 'Baratheon', 'Tyrell', 'Greyjoy', 'Martell', 'Arryn', 'Tully', 'Bolton'],
  characters: [
    ['Daenerys Targaryen', 'Mother of Dragons', 'Targaryen'], ['Jon Snow', 'The White Wolf', 'Stark / Targaryen'],
    ['Tyrion Lannister', 'The Hand', 'Lannister'], ['Cersei Lannister', 'Queen of the Seven Kingdoms', 'Lannister'],
    ['Arya Stark', 'No One', 'Stark'], ['Sansa Stark', 'Queen in the North', 'Stark'],
    ['Jaime Lannister', 'Kingslayer', 'Lannister'], ['Bran Stark', 'Three-Eyed Raven', 'Stark'],
    ['Night King', 'The Long Night', 'White Walkers'], ['Brienne of Tarth', 'Knight of the Seven Kingdoms', 'Tarth'],
    ['Jorah Mormont', 'The Exile Knight', 'Mormont'], ['The Hound', 'Sandor Clegane', 'Clegane']
  ],
  timeline: [
    ['298 AC', 'King Robert asks Ned Stark to become Hand of the King.'], ['298 AC', 'Daenerys receives three dragon eggs.'],
    ['299 AC', 'The War of the Five Kings begins.'], ['299 AC', 'Blackwater decides the fate of King’s Landing.'],
    ['300 AC', 'The Red Wedding breaks House Stark.'], ['301 AC', 'Daenerys rules Meereen and learns the cost of power.'],
    ['302 AC', 'Jon Snow is named King in the North.'], ['304 AC', 'Daenerys arrives in Westeros.'],
    ['305 AC', 'The Long Night reaches Winterfell.'], ['305 AC', 'A new ruler is chosen after the fall of the Iron Throne.']
  ],
  moments: ['Battle of the Bastards', 'The Long Night', 'Blackwater', 'Hardhome', 'The Red Wedding', 'Daenerys arrives in Westeros']
}

const hotd = {
  key: 'hotd',
  label: 'House of the Dragon',
  eyebrow: 'Fire, blood and succession',
  title: 'House of the Dragon',
  subtitle: 'A premium Targaryen war room: dragons, riders, succession claims and the Dance of the Dragons.',
  accent: '#ff6b3a',
  hero: img('hotd-banner.jpg'),
  cards: [img('dragon-clouds.jpg'), img('dragon-red.jpg'), img('rhaenyra-alicent.jpg')],
  houses: ['Targaryen', 'Hightower', 'Velaryon', 'Strong', 'Arryn', 'Baratheon', 'Lannister', 'Massey', 'Cole', 'Beesbury'],
  characters: [
    ['Queen Rhaenyra Targaryen', 'The Black Queen', 'Team Black'], ['Prince Daemon Targaryen', 'Rogue Prince', 'Team Black'],
    ['King Viserys I Targaryen', 'The Peaceful King', 'Targaryen'], ['Alicent Hightower', 'The Green Queen', 'Team Green'],
    ['Prince Aemond Targaryen', 'One-Eye', 'Team Green'], ['Otto Hightower', 'The Kingmaker Hand', 'Hightower'],
    ['Corlys Velaryon', 'The Sea Snake', 'Velaryon'], ['Rhaenys Targaryen', 'The Queen Who Never Was', 'Team Black'],
    ['Aegon II Targaryen', 'The Green King', 'Team Green'], ['Jacaerys Velaryon', 'Prince of Dragonstone', 'Team Black'],
    ['Criston Cole', 'Lord Commander', 'Team Green'], ['Mysaria', 'The White Worm', 'Spy Network']
  ],
  dragons: ['Syrax', 'Caraxes', 'Vhagar', 'Meleys', 'Seasmoke', 'Vermax', 'Sunfyre', 'Dreamfyre', 'Vermithor', 'Silverwing'],
  timeline: [
    ['101 AC', 'The Great Council chooses Viserys over Rhaenys.'], ['105 AC', 'Rhaenyra is born into the Targaryen line.'],
    ['112 AC', 'Daemon becomes the Rogue Prince of the City Watch.'], ['113 AC', 'Viserys names Rhaenyra heir to the Iron Throne.'],
    ['115 AC', 'Alicent marries Viserys and a rival branch begins.'], ['120 AC', 'Laena Velaryon bonds with Vhagar.'],
    ['127 AC', 'The Driftmark incident changes the children forever.'], ['129 AC', 'Viserys dies and two councils crown two heirs.'],
    ['129 AC', 'Lucerys and Arrax fall at Storm’s End.'], ['130 AC', 'The Dance of the Dragons consumes the realm.']
  ],
  moments: ['A Dynasty Forged by Fire', 'Dragon Riders Rise', 'The Greens vs The Blacks', 'The Driftmark Wound', 'Storm’s End', 'Dance of the Dragons']
}

function App() {
  const [active, setActive] = useState('hotd')
  const [query, setQuery] = useState('')
  const data = active === 'hotd' ? hotd : got
  const allNames = useMemo(() => data.characters.filter(([name, role, house]) => `${name} ${role} ${house}`.toLowerCase().includes(query.toLowerCase())), [data, query])

  return <main className={`app ${data.key}`} style={{ '--accent': data.accent }}>
    <nav className="topbar">
      <div className="brand"><span className="sword">†</span> The Iron Throne</div>
      <div className="tabs">
        {[got, hotd].map(t => <button key={t.key} onClick={() => setActive(t.key)} className={active === t.key ? 'active' : ''}>{t.label}</button>)}
      </div>
      <div className="navlinks"><a href="#timeline">Timeline</a><a href="#houses">Houses</a><a href="#characters">Characters</a></div>
    </nav>

    <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.94), rgba(0,0,0,.46), rgba(0,0,0,.88)), url(${data.hero})` }}>
      <div className="heroCopy">
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <div className="ctaRow"><a href="#timeline">Explore Timeline</a><a href="#characters">Meet Characters</a></div>
      </div>
      <div className="statPanel"><b>{data.characters.length}</b><span>Major characters</span><b>{data.timeline.length}</b><span>Timeline events</span><b>{data.houses.length}</b><span>Houses & factions</span></div>
    </section>

    <section className="splitShowcase">
      {data.cards.map((src, i) => <article key={src} className="cinemaCard"><img src={src}/><div><small>Chapter {i+1}</small><h3>{data.moments[i]}</h3></div></article>)}
    </section>

    <section id="houses" className="panel">
      <div className="sectionHead"><p>Great powers</p><h2>Houses & Factions</h2></div>
      <div className="houseGrid">{data.houses.map(h => <div className="house" key={h}><span>{h[0]}</span><strong>{h}</strong></div>)}</div>
    </section>

    <section id="timeline" className="panel timelinePanel">
      <div className="sectionHead"><p>Chronicle</p><h2>Complete Timeline</h2></div>
      <div className="timeline">{data.timeline.map(([year, event], i) => <div className="timeItem" key={year+event}><div className="dot">{i+1}</div><b>{year}</b><p>{event}</p></div>)}</div>
    </section>

    <section id="characters" className="panel">
      <div className="sectionHead"><p>The players</p><h2>Character Codex</h2><input placeholder="Search character, title or faction..." value={query} onChange={e=>setQuery(e.target.value)} /></div>
      <div className="characterGrid">{allNames.map(([name, role, faction]) => <article className="character" key={name}><div className="avatar">{name.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><h3>{name}</h3><p>{role}</p><span>{faction}</span></article>)}</div>
    </section>

    <section className="warRoom">
      <div><p className="eyebrow">Interactive war room</p><h2>{active === 'hotd' ? 'Dragons of the Dance' : 'Battles of Westeros'}</h2><p>{active === 'hotd' ? hotd.dragons.join(' • ') : got.moments.join(' • ')}</p></div>
      <img src={active === 'hotd' ? img('hotd-mark.webp') : img('three.png')} />
    </section>
  </main>
}

export default App
