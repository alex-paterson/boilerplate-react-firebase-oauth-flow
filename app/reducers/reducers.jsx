var uuid = require('node-uuid');
var moment = require('moment');


export var loginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        token: action.token,
        uid: action.uid
      }
    case 'LOGOUT':
      return {}
    default:
      return state;
  }
}
