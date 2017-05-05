import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import NoMatch from './NoMatch';
import About from './About';
import Rules from './Rules';
import Scores from './Scores';
import Yahtzee from './Yahtzee';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';


// Different Way: class App extends React.Component
class App extends Component {
  state = { name: '', edit: true };

  toggleEdit = () => {
    this.setState( (state) => {
      return { edit: !state.edit };
    });
  }

  submitName = (e) => {
    // This is where we could do a network request to update the database
    e.preventDefault();
    this.toggleEdit();
  }

  changeName = (e) => {
    // This is for our controlled component so it sets state and passes it down
    this.setState({ name: e.target.value });
  }

  render() {
    // let { name, edit } = this.state;
    // let { changeName, submitName, toggleEdit } = this;

    let { state: { name, edit }, changeName, submitName, toggleEdit } = this;

    return(
      <div>
        <NavBar />
        <Switch>
          <ProtectedRoute exact path='/' component={Yahtzee} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={About} />
          <Route exact path='/rules' component={Rules} />
          <Route exact path='/scores' component={Scores} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
