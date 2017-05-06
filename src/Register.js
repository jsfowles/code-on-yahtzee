import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { auth, authenticatedUser } from './auth';

class Register extends React.Component {
  state = {
    user: authenticatedUser(),
    nickname: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  handleChange = (e) => {
    let element = e.target;
    let key = element.id;
    this.setState({ [key]: element.value });
  }

  register = (e) => {
    e.preventDefault();
    let { nickname, email, password, passwordConfirmation } = this.state
    if (password === passwordConfirmation) {
      auth({ nickname, email, password, passwordConfirmation }, '/auth', () => {
        this.setState({ user: authenticatedUser() });
      });
    }
  }

  passwordsMatch = () => {
    let { password, passwordConfirmation } = this.state;
    return password === passwordConfirmation
  }

  render() {
    let {
      nickname,
      email,
      password,
      passwordConfirmation,
      user
    } = this.state

    return (
      <div className="container">
        <h2 className="center">Create Account</h2>
        { this.passwordsMatch() ? null : <span className="red-text">Passwords do not match</span> }
        { Object.keys(user).length ?
            <Redirect to="/" />
            :
            <form onSubmit={this.register}>
              <input
                id="nickname"
                autoFocus
                required
                placeholder="Nickname"
                value={nickname}
                onChange={this.handleChange}
              />
              <input
                id="email"
                required
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
              <input
                id="password"
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />              
              <input
                id="passwordConfirmation"
                required
                type="password"
                placeholder="Confirm"
                value={passwordConfirmation}
                onChange={this.handleChange}
              />

              <button className="btn">Create</button>
            </form>
        }
        <Link to='/login'>Sign In</Link>
      </div>
    )
  }
}

export default Register;
