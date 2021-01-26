import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCvzI60-A6Xd4JMAdFAsUE7ifmHPDSN_8w",
    authDomain: "budget-app-2bad0.firebaseapp.com",
    projectId: "budget-app-2bad0",
    storageBucket: "budget-app-2bad0.appspot.com",
    messagingSenderId: "556405836089",
    appId: "1:556405836089:web:79cc6ae4366639cef040e8"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
      }
  export default firebase.firestore();
