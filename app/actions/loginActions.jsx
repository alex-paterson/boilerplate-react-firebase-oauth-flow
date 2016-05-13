import moment from 'moment';

import firebaseRef, {getUserRef} from 'app/firebase';


export var startLogin = () => {
  return (dispatch, getStore) => {
    return firebaseRef.authWithOAuthPopup('github');
  }
};

export var startLogout = () => {
  return (dispatch, getStore) => {
    return firebaseRef.unauth();
  }
};


export var login = (token, uid) => {
  return {
    type: 'LOGIN',
    token: token,
    uid: uid
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};
