import React, { useEffect, useMemo, useRef, useState } from 'react'
import './DragonChronicle.css'

const CHAPTERS = [
  {
    era: 'I',
    title: 'The Dragon Court',
    mood: 'Succession becomes a blade before the war begins.',
    detail: 'A royal council, divided loyalties, and a throne room glowing like a furnace. This chapter sets up a dynasty cracking from the inside.',
    heat: 62,
  },
  {
    era: 'II',
    title: 'The Black Council',
    mood: 'Oaths are counted, ravens are released, and old alliances wake.',
    detail: 'A war table view with moving embers and house tokens gives the page a strategic campaign feeling.',
    heat: 78,
  },
  {
    era: 'III',
    title: 'The Green Claim',
    mood: 'Crowns do not wait for truth. They wait for timing.',
    detail: 'The rival claim is presented with emerald fire, ceremonial gold, and cold political symmetry.',
    heat: 72,
  },
  {
    era: 'IV',
    title: 'Dragon Over Storm',
    mood: 'Above black clouds, ancient power meets ambition.',
    detail: 'A cinematic battle panel uses pure CSS dragons, lightning, smoke, and parallax layers instead of copyrighted footage.',
    heat: 91,
  },
  {
    era: 'V',
    title: 'Ashes of the Realm',
    mood: 'Every victory writes a debt in fire.',
    detail: 'The final act turns the UI darker: burnt maps, fractured bloodlines, and a warning that dynasties can destroy themselves.',
    heat: 96,
  },
]

const DRAGONS = [
  { name: 'Vermillion Dread', rider: 'The Crownless Heir', trait: 'Siege fire', scale: 'Crimson', speed: 74, fury: 96 },
  { name: 'Moonfyre', rider: 'The Silent Princess', trait: 'Night raids', scale: 'Pearl', speed: 91, fury: 68 },
  { name: 'Ashwing', rider: 'The Exiled Prince', trait: 'Smoke cover', scale: 'Obsidian', speed: 82, fury: 88 },
  { name: 'Goldmaw', rider: 'The Young King', trait: 'Sunlit terror', scale: 'Bronze', speed: 69, fury: 80 },
]

const BLOODLINE = [
  ['01', 'Old Valyria', 'A vanished empire leaves behind language, steel, bloodlines, and beasts that make kings look temporary.'],
  ['02', 'Dragonstone', 'A volcanic seat becomes the last candle of an older world.'],
  ['03', 'The Crown Question', 'The realm learns that law, love, and ambition rarely choose the same heir.'],
  ['04', 'The Dance', 'Dragon fights dragon, and the sky becomes the battlefield.'],
  ['05', 'The Broken Peace', 'The war ends, but the cost keeps echoing through every generation that follows.'],
]

function DragonChronicle() {
  const sectionRef = useRef(null)
  const [chapterIndex, setChapterIndex] = useState(0)
  const [dragon, setDragon] = useState(DRAGONS[0])
  const current = CHAPTERS[chapterIndex]

  const heatLabel = useMemo(() => {
    if (current.heat > 90) return 'Cataclysmic'
    if (current.heat > 75) return 'War footing'
    return 'Court tension'
  }, [current.heat])

  useEffect(() => {
    const nodes = sectionRef.current?.querySelectorAll('.dragon-reveal') || []
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('dragon-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.13 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="dragon-chronicle" id="dragon-chronicle">
      <div className="dragon-sky" aria-hidden="true">
        <span /><span /><span />
      </div>

      <header className="dragon-header dragon-reveal">
        <p className="eyebrow">New Experience</p>
        <h2>Blood of the Dragon</h2>
        <p>
          A House-of-the-Dragon-inspired original microsite layer: royal succession, dragon riders,
          war councils, aerial fights, prophecy, and a dynasty timeline built with custom React and CSS.
        </p>
      </header>

      <div className="dragon-command dragon-reveal">
        <div className="dragon-stage-card">
          <div className="battle-sky">
            <div className="sun-core" />
            <div className="cloud cloud-a" />
            <div className="cloud cloud-b" />
            <div className="css-dragon dragon-one"><i /><b /><em /></div>
            <div className="css-dragon dragon-two"><i /><b /><em /></div>
            <div className="flame-lance" />
            <div className="battle-caption">Animated dragon-fight scene · no copyrighted footage</div>
          </div>
        </div>

        <article className="chapter-console">
          <p className="eyebrow">Chapter {current.era}</p>
          <h3>{current.title}</h3>
          <strong>{current.mood}</strong>
          <p>{current.detail}</p>
          <div className="heat-meter" aria-label={`Conflict intensity ${current.heat} percent`}>
            <span style={{ width: `${current.heat}%` }} />
          </div>
          <div className="heat-row"><span>{heatLabel}</span><span>{current.heat}% intensity</span></div>
          <div className="chapter-dots">
            {CHAPTERS.map((chapter, index) => (
              <button
                key={chapter.title}
                type="button"
                className={index === chapterIndex ? 'active' : ''}
                onClick={() => setChapterIndex(index)}
                aria-label={`Open chapter ${chapter.era}`}
              >
                {chapter.era}
              </button>
            ))}
          </div>
        </article>
      </div>

      <section className="dragon-roster dragon-reveal">
        <div className="dragon-copy">
          <p className="eyebrow">Dragon Roster</p>
          <h2>Choose a war beast</h2>
          <p>Each card changes the rider dossier and gives the page a fantasy-game selection feel.</p>
        </div>
        <div className="dragon-cards">
          {DRAGONS.map((item) => (
            <button
              type="button"
              key={item.name}
              className={item.name === dragon.name ? 'active' : ''}
              onClick={() => setDragon(item)}
            >
              <span className="wing-mark">⌁</span>
              <strong>{item.name}</strong>
              <small>{item.scale} scales</small>
            </button>
          ))}
        </div>
        <div className="dragon-dossier">
          <span>{dragon.rider}</span>
          <h3>{dragon.name}</h3>
          <p>{dragon.trait}</p>
          <label>Speed <i style={{ width: `${dragon.speed}%` }} /></label>
          <label>Fury <i style={{ width: `${dragon.fury}%` }} /></label>
        </div>
      </section>

      <section className="bloodline dragon-reveal">
        <p className="eyebrow">Fire & Blood Inspired Arc</p>
        <h2>A dynasty told as playable chapters</h2>
        <div className="bloodline-grid">
          {BLOODLINE.map(([num, title, text]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="council-board dragon-reveal">
        <div>
          <p className="eyebrow">War Council</p>
          <h2>Black flame vs green flame</h2>
          <p>Use this as the next-level section for choosing sides, showing campaign movements, or adding future mini-games.</p>
        </div>
        <div className="council-map" aria-hidden="true">
          <i className="token black-token">B</i>
          <i className="token green-token">G</i>
          <span className="route route-one" />
          <span className="route route-two" />
          <b>Dragonstone</b>
          <strong>King's Landing</strong>
          <em>Stormlands</em>
        </div>
      </section>
    </section>
  )
}

export default DragonChronicle
