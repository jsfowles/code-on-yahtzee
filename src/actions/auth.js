import { BASE_URL } from '../utils/url';

export const logout = (user) => {
  return(dispatch) => {
    fetch(`${BASE_URL}/auth/sign_out`, {
      method: 'DELETE',
      headers: authHeaders(user),
    }).then( () => dispatch({ type: 'LOGOUT' }))
  }
}

export const auth = (user, endpoint, history) => {
  // Thunk
  return(dispatch) => {
    fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...user })
    }).then( res => res.json() )
      .then( user => {
        dispatch({ type: 'USER', user })
        history.push('/');
      })
  }
}

export const authHeaders = (user) => {
  let { client, email, token } = user;
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'token-type': 'Bearer',
    'access-token': token,
    'client': client,
    'uid': email
  }
}
