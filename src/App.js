import React, { Component } from 'react';
import Player from './Player';
import Game from './Game';

class App extends Component {
  state = { name: '', edit: true };

  toggleEdit = () => {
    this.setState( (state) => {
      return { edit: !state.edit };
    });
  }

  submitName = (e) => {
    e.preventDefault();
    this.toggleEdit();
  }

  changeName = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    let { state: {name, edit },
          changeName,
          submitName,
          toggleEdit } = this;

    return(
      <div>
        { edit ?
          <Player
            name={ name }
            handleChange={ changeName }
            handleSubmit={ submitName}
          /> :
          <Game player={ name } toggleEdit={ toggleEdit } />
        }
      </div>
    );
  }
}

export default App;
