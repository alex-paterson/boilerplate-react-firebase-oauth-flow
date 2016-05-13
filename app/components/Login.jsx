var React = require('react');
import * as Redux from 'react-redux';
import * as loginActions from 'loginActions';

export var Login = React.createClass({
  onLogin: function() {
    var {dispatch} = this.props;
    dispatch(loginActions.startLogin());
  },
  render: function() {
    return (
      <div>
        <button className="button" onClick={this.onLogin}>Login with GitHub</button>
      </div>
    );
  }

});

export default Redux.connect()(Login);
