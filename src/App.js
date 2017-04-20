import React, { Component } from 'react';

class App extends Component {
  state = { name: '', nameField: '' }

  handleChange = (e) => {
    this.setState({ nameField: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState( (state) => { 
      return { name: state.nameField, nameField: '' }
    })
  }

  reset = () => {
    this.setState({ name: '' });
  }

  render() {
    let { name, nameField } = this.state
    return (
      <div>
        { name ?
          <div>
            <h3>{`Player: ${name}`}</h3>
            <button onClick={this.reset}>New Game</button>
          </div>
          :
          <div>
            <h1>Enter your name</h1>
            <form onSubmit={this.handleSubmit}>
              <input value={nameField} onChange={this.handleChange} />
            </form>
          </div>
        }
      </div>
    );
  }
}

export default App;
