import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyAW9Yb7OPY8bB-fMi4-x2YYN7JEfeiraSQ",
    authDomain: "job-search-app-f7fa1.firebaseapp.com",
    databaseURL: "https://job-search-app-f7fa1.firebaseio.com",
    projectId: "job-search-app-f7fa1",
    storageBucket: "job-search-app-f7fa1.appspot.com",
    messagingSenderId: "794082995107"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;

