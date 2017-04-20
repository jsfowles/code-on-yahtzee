import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { fakeAuth } from './auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default ProtectedRoute;
