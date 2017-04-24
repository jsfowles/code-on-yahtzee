import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './actions/auth';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '' }

  handleChange = (e) => {
    let element = e.target;
    let key = element.placeholder;
    this.setState({ [key]: element.value });
  }

  register = (e) => {
    e.preventDefault();
    let { nickname, email, password, passwordConfirmation } = this.state
    let { history, dispatch } = this.props;

    if (password === passwordConfirmation) {
      dispatch(auth({ nickname, email, password, passwordConfirmation }, '/auth', history));
    }
  }

  passwordsMatch = () => {
    let { password, passwordConfirmation } = this.state;
    return password === passwordConfirmation
  }

  render() {
    let { nickname, email, password, passwordConfirmation, user } = this.state
    return (
      <div className="container">
        <h2 className="center">Create Account</h2>
        { this.passwordsMatch() ? null : <span className="red-text">Passwords do not match</span> }
        <form onSubmit={this.register}>
          <input autoFocus required placeholder="nickname" value={nickname} onChange={this.handleChange} />
          <input required placeholder="email" value={email} onChange={this.handleChange} />
          <input required type="password" placeholder="password" value={password} onChange={this.handleChange} />
          <input required type="password" placeholder="passwordConfirmation" value={passwordConfirmation} onChange={this.handleChange} />
          <button className="btn">Create</button>
        </form>
        <Link to='/login'>Sign In</Link>
      </div>
    )
  }
}

export default connect()(Register);

