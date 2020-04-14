import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyApa06IXpc_nD5z_KtB3xHp0ZFg8BsS4nk',
  authDomain: 'crwn-db-eef77.firebaseapp.com',
  databaseURL: 'https://crwn-db-eef77.firebaseio.com',
  projectId: 'crwn-db-eef77',
  storageBucket: 'crwn-db-eef77.appspot.com',
  messagingSenderId: '747055820585',
  appId: '1:747055820585:web:20be6fc0145495bb8d1138',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
