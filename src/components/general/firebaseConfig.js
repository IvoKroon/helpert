import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: "AIzaSyDYqRErL3PElxfLVbixNSdsF1Olgrr8zc0",
  authDomain: "helpert-d587b.firebaseapp.com",
  databaseURL: "https://helpert-d587b.firebaseio.com",
  projectId: "helpert-d587b",
  storageBucket: "helpert-d587b.appspot.com",
  messagingSenderId: "423056047451"
};
firebase.initializeApp(config);

export default firebase;
