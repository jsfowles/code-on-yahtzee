const user = ( state = {}, action) => {
  switch(action.type) {
    case 'USER':
      return action.user;
    case 'LOGOUT':
      return {};
    case 'UPDATE_USER':
      return { ...state, nickname: action.nickname };
    default:
      return state;
  }
}

export default user;

// Example Action: { type: 'UPDATE_USER', nickname: 'updated name' }
// Example Action: { type: 'LOGOUT' }
// Example Action: { type: 'USER', user: { nickname: 'jake', email: 'jakesorce' } }

// Our users reducer does not handle this so we return the default which is just the state
// Example Action: { type: 'OTHER_ACTION', { foo: bar } }

// Redux Store
// {
//   user: {},
//   scores: [],
//   chat: {},
//   onlineUsers: [],
// }
