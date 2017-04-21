import { BASE_URL } from './url';
import { authHeaders } from './auth';

export const updateUser = (nickname, cb) => {
  fetch(`${BASE_URL}/auth`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify({ nickname }),
  }).then( res => res.json() )
    .then( () => localStorage.setItem('nickname', nickname) )
    .then( () => cb() ) 
}
