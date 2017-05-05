import React from 'react';

const Game = ({ player, toggleEdit }) => (
  <div>
    <h5> Welcome { player } </h5>
    <button
      className='btn'
      onClick={ toggleEdit }>
        Edit Name
    </button>
  </div>
);

export default Game;
