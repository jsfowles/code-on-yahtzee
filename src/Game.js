import React from 'react';
import Board from './Board';
import ScoreCard from './ScoreCard';

class Game extends React.Component {
  state = { roll: 0, dice: [...new Array(5)], keep: [] };

  rollDice = () => {
    let dice = this.state.dice.map( (el, i) => {
      return Math.floor(Math.random() * 6 ) + 1
    });

    this.setState( (state) => {
      return { dice, roll: state.roll + 1 };
    });
  }

  render() {
    let { toggleEdit, player } = this.props;
    let { roll, dice } = this.state;

    return(
      <div>
        <div className="row">
          <div className="col s12">
            <div className="col s6">
              <h4>Welcome {player}</h4>
            </div>
            <div className="col s6">
              <button
                className="btn btn-flat right"
                onClick={toggleEdit}>
                  Edit Name
              </button>
            </div>
          </div>
          <div style={styles.fullHeight} className="col s12 m8 green lighten-3">
            <Board roll={roll} dice={dice} rollDice={this.rollDice} />
          </div>
          <div style={styles.fullHeight} className="col s12 m4 purple lighten-3">
            <ScoreCard />
          </div>
        </div>
      </div>
    )
  }
};

const styles = {
  fullHeight: {
    height: 'calc(100vh - 67px)',
  }
}

export default Game;