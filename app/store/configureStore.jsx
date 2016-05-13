var redux = require('redux');
import thunk from 'redux-thunk';
var {loginReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    login: loginReducer
  });
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
