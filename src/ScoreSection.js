import React from 'react';
import ScoreRow from './ScoreRow';
import { connect } from 'react-redux';

const total = (score, label) => (
  <li 
    key={label}
    className="collection-item"
  >
    <div>
      {label}
      <span className="secondary-content"><strong>{score}</strong></span>
    </div>
  </li>
)

const generateTotals = (scores, label) => {
  const sectionScores = []
  const sectionTotal = scores.reduce( (total, entry) => {
    let score = entry.score || 0 
    return total + score
  }, 0)

  sectionScores.push(total(sectionTotal, 'Section Total'))

  if (label === 'Upper') {
    const bonus = sectionTotal >= 63 ? 35 : 0
    sectionScores.push(total(bonus, 'Bonus'))
    sectionScores.push(total(bonus + sectionTotal, 'Total Score'))
  }

  return sectionScores;
}

const ScoreSection = ({ label, currentGame: { scores } }) => (
  <div>
    <h5>{label} Section</h5>
    <ul className="collection">
      { scores.filter( s => s.section === label.toLowerCase() ).map( (score, i) => {
          return (<ScoreRow key={i} {...score} />)
        })
      }
      { generateTotals(scores, label) }
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(ScoreSection);
