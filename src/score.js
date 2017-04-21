import { BASE_URL } from './url';
import { authHeaders } from './auth';

export const postScore = (score) => {
  let value = score;
  fetch(`${BASE_URL}/yahtzee_scores`, {
     method: 'POST',
     headers: authHeaders(),
     body: JSON.stringify({ score: { value }})
  })
}

export const highScores = (cb) => {
  fetch(`${BASE_URL}/yahtzee_scores`, { headers: authHeaders() })
    .then( res => res.json() )
    .then( scores => cb(scores) )
}
