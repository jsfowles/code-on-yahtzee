import React from 'react';

import Player from './Player';
import Game from './Game';

class Yahtzee extends React.Component {
  state = { edit: false };

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !state.edit }
    });
  }

  render() {
    return (
      <div>
        { this.state.edit ?
          <Player toggleEdit={this.toggleEdit} />
          :
          <Game toggleEdit={this.toggleEdit} />
        }
      </div>
    )
  }
}

export default Yahtzee;
