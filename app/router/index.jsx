import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import firebaseRef from 'app/firebase';
import App from 'App';
import Login from 'Login';

var requireLogin = (indexState, replace, next) => {
  if (!firebaseRef.getAuth()) {
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (indexState, replace, next) => {
  if (firebaseRef.getAuth()) {
    replace('/app');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="app" component={App} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
