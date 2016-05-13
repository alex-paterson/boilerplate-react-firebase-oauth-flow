import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import firebaseRef from './firebase/index';
import * as loginActions from 'loginActions';

var store = require('configureStore').configure();
import router from 'app/router';

firebaseRef.onAuth((authData) => {
  if (authData) {
    hashHistory.push('/app');
    store.dispatch(loginActions.login(authData.token, authData.uid));
  } else {
    hashHistory.push('/');
    store.dispatch(loginActions.logout());
  }
});

// Load foundation css
// $(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
