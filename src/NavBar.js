import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { fakeAuth, logout } from './auth';

const authLinks = (history) => {
  if(fakeAuth()) {
    return (
      <li>
        <a
          onClick={ () => {
            logout()
            history.push('/')
          }}
        >
          Logout
        </a>
      </li>
    )
  }
}

const NavBar = ({ history }) => {
  let links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Rules', url: '/rules' },
    { name: 'Scores', url: '/scores' },
  ]

  return (
    <nav>
      <ul className='right'>
        { links.map( (link, i) => {
            return(
              <li key={i}>
                <NavLink
                  exact
                  to={link.url}
                  activeStyle={styles.activeStyle}
                >
                  {link.name}
                </NavLink>
              </li>
            )
          })
        }
        { authLinks(history) }
      </ul>
    </nav>
  );
}

const styles = {
  activeStyle: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
}
export default withRouter(NavBar);
