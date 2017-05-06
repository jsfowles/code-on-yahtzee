import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from './actions/user';

const Player = ({ user, dispatch, toggleEdit }) => {
  let nameField;

  return (
    <form
      className="container"
      onSubmit={ e => {
        e.preventDefault()
        dispatch(updateUser(nameField.value, user))
      }}
    >
      <label>Name: </label>
      <input
        ref={ n => nameField = n }
        defaultValue={user.nickname}
      />
    </form>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Player);
