import React from 'react';
import Player from './Player';
import Game from './Game';

class Yahtzee extends React.Component {
  state = { name: '', edit: true }

  updatePlayer = (name) => {
    this.setState({ name, edit: false })
  }

  editPlayer = () => {
    this.setState({ edit: true });
  }

  render() {
    let { state: { name, edit }, updatePlayer, editPlayer } = this;
    return (
      <div>
        { edit ?
          <Player handleSubmit={updatePlayer} name={name} />
          :
          <Game player={name} editPlayer={editPlayer} />
        }
      </div>
    )
  }
}

export default Yahtzee;
