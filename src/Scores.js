import React from 'react';
import { highScores } from './score';
import { authenticatedUser } from './auth';

class Scores extends React.Component {
  state = { scores: [], show: 'All' }
  
  componentDidMount() {
    highScores( (scores) => {
      this.setState({ scores });
    });
  }

  toggleShow = () => {
    let { show } = this.state;
    this.setState({ show: show === 'All' ? 'My' : 'All' })
  }

  filteredScores = () => {
    let { scores, show } = this.state;
    let user = authenticatedUser()
    let filtered = show === 'All' ? scores : scores.filter( s => s.email === user.email ) 
    return filtered.map( s => {
      let { created_at, nickname, score, id } = s;
      let date = new Date(created_at).toLocaleDateString()
      return (
        <li key={id} className="collection-item">
          {score}
          <div className="secondary-content">
            <span className="grey-text">{date}</span>
            {' | ' }
            {nickname}
          </div>
        </li>
      )
    });
  }

  render() {
    let { show } = this.state;
    
    return (
      <div className="container">
        <h2 className="center">{show} Scores</h2>
        <div className="center">
          <button className="btn" onClick={this.toggleShow}>{ show === 'All' ? 'My Scores' : 'All Scores'}</button>
        </div>
        <ul className="collection">
          { this.filteredScores() }
        </ul>
      </div>
    )
  }

}

export default Scores
