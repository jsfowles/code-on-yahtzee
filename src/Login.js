import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './actions/auth';
import { connect } from 'react-redux';

class Login extends React.Component {
  state = { email: '', password: '' }

  authenticate = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    let { dispatch, history } = this.props;
    dispatch(auth({ email, password }, 'auth/sign_in', history));
  }

  handleChange = (e) => {
    let element = e.target;
    let key = element.id;
    this.setState({ [key]: element.value });
  }

  render() {
    let { email, password } = this.state;
    return (
      <div className="center">
        <div className="container">
          <h2 className="center">Sign In</h2>
          <form onSubmit={this.authenticate}>
            <input id="email" autoFocus required placeholder="Email" value={email} onChange={this.handleChange} />
            <input id="password" required type="password" placeholder="Password" value={password} onChange={this.handleChange} />
            <button className="btn">Create</button>
          </form>
          <Link to="/register">New User?</Link>
        </div>
      </div>
    )
  }
}

export default connect()(Login);
