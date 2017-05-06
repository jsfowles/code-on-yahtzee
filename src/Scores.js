import React from 'react';
import { connect } from 'react-redux';
import { BASE_URL } from './utils/url';
import { authHeaders } from './actions/auth';

class Scores extends React.Component {
  state = { show: 'All', scores: [] }

  componentDidMount() {
    let { user } = this.props;
    fetch(`${BASE_URL}/yahtzee_scores`, { headers: authHeaders(user) })
      .then( res => res.json() )
      .then( scores => this.setState({ scores })
    );
  }

  toggleShow = () => {
    this.setState({ show: this.state.show === 'All' ? 'My' : 'All' });
  }

  filteredScores = () => {
    let { user } = this.props;
    let { show, scores } = this.state;
    let filtered = show === 'All' ? scores : scores.filter( s => s.email === user.email );

    return filtered.map( s => {
      let { created_at, nickname, score, id } = s;
      let date = new Date(created_at).toLocaleDateString()
      return (
        <li key={id} className="collection-item">
          {score}
          <div className="secondary-content">
            <span className="grey-text">{date}</span>
           {' | '}
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

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Scores);
