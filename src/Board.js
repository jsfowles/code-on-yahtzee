import React from 'react';
import Dice from './Dice';
import { resetRoll, newGame, rollDice } from './actions/mechanics';
import { connect } from 'react-redux';

const Board = ({ dispatch, currentGame: { roll, dice, keep } }) => {
  let maxRoll = roll === 3;
  let disabled = maxRoll ? { disabled: true } : {};

  return (
    <div className="row">
      <div className="col s12 center">
        <br />
        <button 
          className="btn"
          {...disabled} 
          onClick={() => dispatch(rollDice(dice, keep))}
        >
          {maxRoll ? 'Score Rolls' : 'Roll'}
        </button>
      </div>
      <div className="col s12">
        <br />
      </div>
      <div className="col offset-m1"></div>
      { roll > 0 && dice.map( (d, i) => { return <Dice key={i} index={i} value={d} /> }) }
    </div>
  )
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(Board);
