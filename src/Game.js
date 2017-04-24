import React from 'react';
import { connect } from 'react-redux';
import Board from './Board';
import ScoreCard from './ScoreCard';
import { postScore } from './actions/scores';
import { resetRoll, newGame, rollDice, toggleKept } from './actions/mechanics';

class Game extends React.Component {
  state = { toggleEdit: false };

  resetRoll = () => {
    this.props.dispatch(resetRoll());
  }

  rollDice = () => {
    let { currentGame: { dice, keep }, dispatch } = this.props;
    dispatch(rollDice(dice, keep));
  }

  toggleKept = (i) => {
    let { currentGame: { keep }, dispatch } = this.props;
    dispatch(toggleKept(keep, i));
  }

  endGame = () => {
    let { user, dispatch, currentGame: { completed } } = this.props;
    if (!completed)
      dispatch(postScore(this.props.user, this.calculateTotal()));
  }

  newGame = () => {
    this.props.dispatch(newGame());
  }

  calculateTotal = () => {
    return this.props.currentGame.scores.reduce( (total, entry) => {
      let score = entry.score || 0;
      return total + score;
    }, 0);
  }

  render() {
    let { user: { nickname }, toggleEdit, currentGame: { roll, dice, keep, completed } } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="col s6">
              <h4>Welcome {nickname}</h4>
            </div>
            <div className="col s6">
              <button className="btn btn-flat right" onClick={toggleEdit}>Edit Name</button>
            </div>
          </div>
          <div style={styles.fullHeight} className="col s12 m8 green lighten-3">
            <h5 className='center'>Grand Total: {this.calculateTotal()}</h5>
            { completed ?
              <div className='center'>
                <h1>Game Over</h1>
                <button className='btn red' onClick={this.newGame}>New Game?</button>
              </div> :
              <Board />
            }
          </div>
          <div style={styles.fullHeight} className="col s12 m4 purple lighten-3">
            <ScoreCard endGame={this.endGame} />
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  fullHeight: {
    height: 'calc(100vh - 67px)'
  }
}

const mapStateToProps = (state) => {
  return { 
    user: state.user, 
    currentGame: state.currentGame,
  }
}

export default connect(mapStateToProps)(Game);
