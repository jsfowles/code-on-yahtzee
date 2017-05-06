import { authHeaders } from './auth';
import { BASE_URL } from '../utils/url';

export const postScore = (score) => {
  return(dispatch) => {
    let value = score;
    fetch(`${BASE_URL}/yahtzee_scores`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify({ score: { value }})
    }).then ( dispatch({ type: 'COMPLETE_GAME'}))
  }
}

export const highScores = (cb) => {
  fetch(`${BASE_URL}/yahtzee_scores`, { headers: authHeaders() })
    .then( res => res.json() )
    .then( scores => cb(scores) )
}
