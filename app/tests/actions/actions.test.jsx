import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as loginActions from 'loginActions';
import FirebaseTokenGenerator from 'firebase-token-generator';

import firebaseRef, {getUserRef} from 'app/firebase';

var tokenGenerator = new FirebaseTokenGenerator(process.env.FIREBASE_SECRET);
var createMockStore = configureMockStore([thunk]);


describe('Actions', () => {

  it('should generate login action object', () => {
    var action = {
      type: 'LOGIN',
      token: '123',
      uid: 'abc',
    };
    var res = loginActions.login(action.token, action.uid);
    expect(res).toEqual(action);
  });

  it('should generate logout action object', () => {
    var action = {
      type: 'LOGOUT'
    };
    var res = loginActions.logout();
    expect(res).toEqual(action);
  });

  // describe('Tests using firebase', (done) => {
  //   var uid = 'abc123';
  //
  //   beforeEach((done) => {
  //     var token = tokenGenerator.createToken({uid}).toString();
  //
  //     firebaseRef.authWithCustomToken(token).then(() => {
  //       // Setup
  //     }, (e) => {
  //       // Setup
  //     }).then(() => {
  //       // Setup
  //       done();
  //     }, done);
  //   });
  //
  //   afterEach((done) => {
  //     todosRef.remove((e) => done(e));
  //   });
  // });

});
