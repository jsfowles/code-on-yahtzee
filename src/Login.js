import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { auth, authenticatedUser } from './auth';

class Login extends React.Component {
  state = { user: authenticatedUser(), email: '', password: '' }

  authenticate = (e) => {
    e.preventDefault();
    let { email, password } = this.state
    auth({ email, password }, '/auth/sign_in', () => {
      this.setState({ user: authenticatedUser() });
    });
  }

  handleChange = (e) => {
    let element = e.target;
    let key = element.placeholder;
    this.setState({ [key]: element.value });
  }

  render() {
    let { user, email, password } = this.state;
    return (
      <div className="center">
        { Object.keys(user).length ?
          <Redirect to='/' />
          :
          <div className="container">
            <h2 className="center">Sign In</h2>
            <form onSubmit={this.authenticate}>
              <input autoFocus required placeholder="email" value={email} onChange={this.handleChange} />
              <input required type="password" placeholder="password" value={password} onChange={this.handleChange} />
              <button className="btn">Create</button>
            </form>
            <Link to="/register">New User?</Link>
          </div>
        }
      </div>
    )
  }
}

export default Login;
