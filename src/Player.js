import React from 'react';

const Player = ({ name, handleSubmit }) => {
  let nameField;

  return (
    <form 
      className="container"
      onSubmit={ e => {
        e.preventDefault()
        handleSubmit(nameField.value)
      }}
    >
      <label>Name: </label>
      <input 
        ref={ n => nameField = n } 
        defaultValue={name}
      />
    </form>
  )
}

export default Player
