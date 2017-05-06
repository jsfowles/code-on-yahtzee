import React from 'react';
import { updateScores, resetRoll } from './actions/mechanics';
import { singles, addAllDice, staticScore } from './utils/scoringEngine';
import { connect } from 'react-redux';

class ScoreRow extends React.Component {
  updateScore = (key) => {
    let { currentGame: { dice, scores }, dispatch } = this.props;
    let entry = scores.find( d => d.name === key );
    dispatch(resetRoll());

    if (entry.value)
      entry.score = singles(entry.value, dice);
    else if (entry.addAll)
      entry.score = addAllDice(entry.name, dice);
    else
      entry.score = staticScore(entry.name, dice);

    scores.map( (score) => {
      if (score.name === key)
        return entry;
      return score;
    });

    dispatch(updateScores(scores));
  }

  render() {
    let { name, score, currentGame: { roll } } = this.props;

    return(
      <li className="collection-item">
        <div>
          {name}
          { score !== null ?
            <span className="secondary-content">{score}</span> :
            <i
              style={styles.icon}
              className="secondary-content material-icons"
              onClick={ roll !== 0 ? () => this.updateScore(name) : f => f }
            >
              play_circle_filled
            </i>
          }
        </div>
      </li>
    )
  }
}

const styles = {
  icon: {
    cursor: 'pointer'
  }
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(ScoreRow);
