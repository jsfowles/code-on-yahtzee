import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Yahtzee from './Yahtzee';
import NavBar from './NavBar';
import NoMatch from './NoMatch';
import About from './About';
import Rules from './Rules';
import Scores from './Scores';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <ProtectedRoute exact path="/" component={Yahtzee} />
      <ProtectedRoute exact path="/scores" component={Scores} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/about" component={About} />
      <Route exact path="/rules" component={Rules} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App
