import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBqUyB8veSqggYgXvQmO8l4yrhnFJjLcCQ",
    authDomain: "budget-34c69.firebaseapp.com",
    databaseURL: "https://budget-34c69.firebaseio.com",
    projectId: "budget-34c69",
    storageBucket: "budget-34c69.appspot.com",
    messagingSenderId: "754077773303",
    appId: "1:754077773303:web:1a6b00f491cbc918e8d2f2",
    measurementId: "G-MGG1Z41PXZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore.settings({})
  firebase.analytics();

  export default firebase