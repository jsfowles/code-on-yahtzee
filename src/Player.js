import React from 'react';

const Player = ({ name, handleSubmit, handleChange }) => (
  <form onSubmit={ handleSubmit }>
    <label>Name: </label>
    <input
      onChange={ handleChange }
      value={ name }
      equired
    />
  </form>
);

export default Player;
