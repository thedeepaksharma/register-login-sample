import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDi0HetsjChCau1NRdaqWhQug9QIW4fc6s",
    authDomain: "register-login-sample.firebaseapp.com",
    projectId: "register-login-sample",
    storageBucket: "register-login-sample.appspot.com",
    messagingSenderId: "673280782637",
    appId: "1:673280782637:web:f971d1bc377c4fd202a3a4",
    measurementId: "G-08J1Q1BX29"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;