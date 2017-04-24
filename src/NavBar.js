import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { logout } from './actions/auth';
import { connect } from 'react-redux';

const authLinks = (history, user, dispatch) => {
  if (Object.keys(user).length) {
    return (
      <li>
        <a 
          onClick={ () => {
            dispatch(logout(user))
            history.push('/')
          }}
        >
          Logout
        </a>
      </li>
    )
  }
}

const NavBar = ({ history, user, dispatch }) => {
  let links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Rules', url: '/rules' },
    { name: 'Scores', url: '/scores' }
  ]

  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="right">
          { links.map( (link, i) => {
              return (
                <li key={i}>
                  <NavLink exact activeStyle={styles.active} to={link.url}>{link.name}</NavLink>
                </li>
              )
            })
          }
          {authLinks(history, user, dispatch)}
        </ul>
      </div>
    </nav>
  )

}

const styles = {
  active: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(withRouter(NavBar));
