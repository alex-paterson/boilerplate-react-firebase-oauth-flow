var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');
import * as Redux from 'react-redux';

import * as loginActions from 'loginActions';

export var App = React.createClass({
  onLogout: function (e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(loginActions.startLogout());
  },
  render: function() {
    return (
      <div>
        <a href="#" onClick={this.onLogout}>Logout</a>
      </div>
    );
  }

});

export default Redux.connect()(App);
