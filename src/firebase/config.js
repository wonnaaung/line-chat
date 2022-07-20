import firebase from 'firebase/compat/app';

import "firebase/compat/firestore"
import "firebase/compat/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBBiqEEBw9gIC6C1hMiqjYKG7blRmTtjx4",
    authDomain: "it-service-8fef8.firebaseapp.com",
    databaseURL: "https://it-service-8fef8.firebaseio.com",
    projectId: "it-service-8fef8",
    storageBucket: "it-service-8fef8.appspot.com",
    messagingSenderId: "916366757735",
    appId: "1:916366757735:web:84212810e81f05a68229c2",
    measurementId: "G-1EV2XBLB0T"
  };

  firebase.initializeApp(firebaseConfig)
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export{db,timestamp,auth}
