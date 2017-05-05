import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

class App extends Component {
  state = { counter: 0, color: 'rgb(0,0,0)' };

  changeCounter = (type) => {
    this.setState( (state) => {
      let { counter } = state;
      let color = this.setRandomColor();

      return type === 'inc' ? { counter: counter + 1, color } : { counter: counter -1, color }
    });
  }

  setRandomColor() {
    let r = this.randomColor();
    let g = this.randomColor();
    let b = this.randomColor();

    return `rbg (${r}, ${g}, ${b})`;
  }

  randomColor() {
    return Math.floor(Math.random() * 255 +1);
  }

  render() {
    let { color, counter } = this.state;
    return (
      <div>
        <h1 style={{ color }}>{ counter }</h1>
        <button onClick={ () => this.changeCounter('inc') }>+</button>
        <button onClick={ () => this.changeCounter('dec') }>-</button>
      </div>
    );
  }
}

export default App;
