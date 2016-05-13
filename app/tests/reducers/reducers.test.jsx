import expect from 'expect';
import * as reducers from 'reducers';
import df from 'deep-freeze-strict';

describe('Reducers', () => {
  describe('loginReducer', () => {
    it('should add login info on LOGIN', () => {
      var action = {
        type: 'LOGIN',
        token: '123',
        uid: 'abc'
      };
      var res = reducers.loginReducer(undefined, df(action));

      expect(res).toEqual({
        token: action.token,
        uid: action.uid
      });
    });

    it('should wipe login info on LOGOUT', () => {
      var loginInfo = {
        token: '123',
        uid: 'abc'
      };
      var action = {
        type: 'LOGOUT'
      }
      var res = reducers.loginReducer(df(loginInfo), df(action));

      expect(res).toEqual({});
    });

  });
});
