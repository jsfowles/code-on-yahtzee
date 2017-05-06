import React from 'react';
import ScoreSection from './ScoreSection';
import { resetRoll, updateScores } from './actions/mechanics';
import { connect } from 'react-redux';

class ScoreCard extends React.Component {

  componentDidUpdate() {
    this.checkEndGame();
  }

  checkEndGame = () => {
    let { currentGame: { scores }, endGame } = this.props;
    if (!scores.filter( s => s.score === null).length)
      endGame();
  }

  render() {
    let { scores } = this.props.currentGame;
    return (
      <div>
        <ScoreSection label='Upper' />
        <ScoreSection label='Lower' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame };
}

export default connect(mapStateToProps)(ScoreCard);
