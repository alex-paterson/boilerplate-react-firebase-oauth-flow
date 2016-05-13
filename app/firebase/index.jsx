import Firebase from 'firebase';

var firebaseRef = new Firebase(process.env.FIREBASE_URL);

export var getUserRef = (uid) => {
  return firebaseRef.child(`users/${uid}`);
};

export default firebaseRef;
