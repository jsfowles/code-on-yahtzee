import React from 'react';

class Game extends React.Component {
  render() {
    let { toggleEdit, player } = this.props;
    
    return(
    <div>
      <h5> Welcome { player } </h5>
      <button
      className='btn'
      onClick={ toggleEdit }>
      Edit Name
      </button>
    </div>
    )
  }
);

export default Game;
