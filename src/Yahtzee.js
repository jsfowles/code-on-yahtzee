import React from 'react';

import Player from './Player';
import Game from './Game';
import { authenticatedUser } from './auth';
import { updateUser } from './user';

class Yahtzee extends React.Component {
  state = { nickname: authenticatedUser().nickname, edit: false }

  updatePlayer = (nickname) => {
    updateUser(nickname, () => {
      this.setState({ nickname, edit: false })
    });
  }

  editPlayer = () => {
    this.setState({ edit: true });
  }

  render() {
    let { state: { nickname, edit }, updatePlayer, editPlayer } = this;
    return (
      <div>
        { edit ?
          <Player handleSubmit={updatePlayer} name={nickname} />
          :
          <Game player={nickname} editPlayer={editPlayer} />
        }
      </div>
    )
  }
}

export default Yahtzee;
