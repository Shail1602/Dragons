import React, { useMemo, useState } from 'react'
import './PersonalityQuiz.css'

const RESULTS = {
  dragon: {
    title: 'The Dragon Rider',
    sigil: 'Dragonfire',
    line: 'You lead from instinct, pressure, and presence. When the realm hesitates, you move first.',
    traits: ['Bold', 'Magnetic', 'Risk-taker', 'Hard to ignore'],
    color: 'Crimson flame',
  },
  crown: {
    title: 'The Crown Strategist',
    sigil: 'The Iron Crown',
    line: 'You win by reading the room before the room knows it is being read.',
    traits: ['Calculated', 'Patient', 'Political', 'Composed'],
    color: 'Old gold',
  },
  wolf: {
    title: 'The Northern Loyalist',
    sigil: 'Direwolf',
    line: 'Your power is loyalty. You protect your people, keep your word, and remember every slight.',
    traits: ['Loyal', 'Grounded', 'Protective', 'Principled'],
    color: 'Winter steel',
  },
  raven: {
    title: 'The Raven Seer',
    sigil: 'Black Raven',
    line: 'You are the observer in the shadows, collecting patterns while others chase noise.',
    traits: ['Intuitive', 'Quietly clever', 'Analytical', 'Mysterious'],
    color: 'Midnight blue',
  },
}

const QUESTIONS = [
  {
    q: 'A rival house insults your banner in public. What do you do?',
    options: [
      ['Answer immediately and make sure everyone remembers it.', 'dragon'],
      ['Smile, wait, and make your move when it matters.', 'crown'],
      ['Defend your people without making it a spectacle.', 'wolf'],
      ['Say little, but remember who laughed.', 'raven'],
    ],
  },
  {
    q: 'Choose your battlefield advantage.',
    options: [
      ['Fear in the sky', 'dragon'],
      ['A perfect political alliance', 'crown'],
      ['An army that trusts you completely', 'wolf'],
      ['Information no one else has', 'raven'],
    ],
  },
  {
    q: 'What do people underestimate about you?',
    options: [
      ['How far I can go when challenged', 'dragon'],
      ['How much I notice', 'crown'],
      ['How strong my loyalty is', 'wolf'],
      ['How many steps ahead I am', 'raven'],
    ],
  },
  {
    q: 'The throne is empty. Your first move?',
    options: [
      ['Claim it before anyone else breathes.', 'dragon'],
      ['Secure the council, then the crown.', 'crown'],
      ['Protect the realm from chaos first.', 'wolf'],
      ['Find out who is secretly moving pieces.', 'raven'],
    ],
  },
  {
    q: 'Pick a personal motto.',
    options: [
      ['Fire answers doubt.', 'dragon'],
      ['Power is timing.', 'crown'],
      ['The pack survives.', 'wolf'],
      ['The quiet eye sees all.', 'raven'],
    ],
  },
]

function PersonalityQuiz() {
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const progress = Object.keys(answers).length
  const resultKey = useMemo(() => {
    const scores = { dragon: 0, crown: 0, wolf: 0, raven: 0 }
    Object.values(answers).forEach((key) => { scores[key] += 1 })
    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
  }, [answers])

  const result = RESULTS[resultKey]

  const choose = (questionIndex, key) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: key }))
    setShowResult(false)
  }

  const reset = () => {
    setAnswers({})
    setShowResult(false)
  }

  return (
    <section className="personality-quiz" id="claim-your-nature">
      <div className="quiz-fire" aria-hidden="true" />
      <div className="quiz-header">
        <p className="eyebrow">Final Trial</p>
        <h2>Which realm personality are you?</h2>
        <p>Answer five council questions and reveal whether you rule by fire, strategy, loyalty, or vision.</p>
      </div>

      <div className="quiz-shell">
        <aside className="quiz-status">
          <span>{progress}/{QUESTIONS.length}</span>
          <h3>The Maester’s Reading</h3>
          <div className="quiz-progress"><i style={{ width: `${(progress / QUESTIONS.length) * 100}%` }} /></div>
          <p>{progress === QUESTIONS.length ? 'Your result is ready.' : 'Choose one answer from each chapter.'}</p>
        </aside>

        <div className="quiz-questions">
          {QUESTIONS.map((item, questionIndex) => (
            <article key={item.q} className="quiz-card">
              <strong>Question {questionIndex + 1}</strong>
              <h3>{item.q}</h3>
              <div className="quiz-options">
                {item.options.map(([text, key]) => (
                  <button
                    type="button"
                    key={text}
                    className={answers[questionIndex] === key ? 'selected' : ''}
                    onClick={() => choose(questionIndex, key)}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </article>
          ))}

          <div className="quiz-actions">
            <button type="button" className="reveal-btn" disabled={progress < QUESTIONS.length} onClick={() => setShowResult(true)}>
              Reveal my house nature
            </button>
            <button type="button" className="reset-btn" onClick={reset}>Reset trial</button>
          </div>
        </div>
      </div>

      {showResult && (
        <article className={`quiz-result result-${resultKey}`}>
          <p className="eyebrow">Your Result</p>
          <span>{result.sigil}</span>
          <h2>{result.title}</h2>
          <p>{result.line}</p>
          <div className="trait-row">
            {result.traits.map((trait) => <i key={trait}>{trait}</i>)}
          </div>
          <small>Banner tone: {result.color}</small>
        </article>
      )}
    </section>
  )
}

export default PersonalityQuiz
