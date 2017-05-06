import { BASE_URL } from './url';
import { authHeaders } from './auth';

export const updateUser = (nickname, cb) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/auth`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify({ nickname }),
    }).then( () => dispatch({ type: 'UPDATE_USER', nickname }) )
  }    
}
