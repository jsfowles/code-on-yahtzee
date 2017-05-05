import React from 'react';
import { Redirect } from 'react-router-dom';
import { login, fakeAuth } from './auth';

class Login extends React.Component {
  state = { isAuthenticated: fakeAuth() }

  authenticate = () => {
    login();
    this.setState({ isAuthenticated: true });
  }

  render() {
    let { location: { state: { from }}} = this.props;
    let { isAuthenticated } = this.state;
    return (
      <div className="center">
        { isAuthenticated ?
            <Redirect to={from.pathname ? from.pathname : '/' } />
            :
            <button className="btn" onClick={this.authenticate}>Login</button>
        }
     </div>
   )
  }
}

export default Login;
