import React from 'react';

const styles = {
  icon: {
    cursor: 'pointer'
  }
}

const ScoreRow = ({ name, score, updateScore, canScore }) => (
  <li className="collection-item">
    <div>
      {name}
      { score !== null ?
        <span className="secondary-content">{score}</span> :
        <i
          style={styles.icon}
          className="secondary-content material-icons"
          onClick={ canScore ? () => updateScore(name) : f => f}
        >
          play_circle_filled
        </i>
      }
    </div>
  </li>
)
export default ScoreRow;
