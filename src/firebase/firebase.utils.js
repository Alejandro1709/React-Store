import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBPZIvwuUFPh7J91oJj7tEQHFlDa-Bk6vY',
  authDomain: 'crwn-13a9b.firebaseapp.com',
  projectId: 'crwn-13a9b',
  storageBucket: 'crwn-13a9b.appspot.com',
  messagingSenderId: '846846670498',
  appId: '1:846846670498:web:24453f45a57f113d5c49fb',
  measurementId: 'G-BWBHSCML73',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
