import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './actions/auth';
import { connect } from 'react-redux';

class Register extends React.Component {
  state = {
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
    let { history, dispatch } = this.props;
    if (password === passwordConfirmation)
      dispatch(auth({ nickname, email, password, passwordConfirmation }, 'auth', history));
  }

  passwordsMatch = () => {
    let { password, passwordConfirmation } = this.state;
    return password === passwordConfirmation
  }

  render() {
    let { nickname, email, password, passwordConfirmation } = this.state
    return (
      <div className="container">
        <h2 className="center">Create Account</h2>
        { this.passwordsMatch() ? null : <span className="red-text">Passwords do not match</span> }
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
            required type="password"
            placeholder="Confirm"
            value={passwordConfirmation}
            onChange={this.handleChange}
          />
          <button className="btn">Create</button>
        </form>
        <Link to='/login'>Sign In</Link>
      </div>
    )
  }
}

export default connect()(Register);
