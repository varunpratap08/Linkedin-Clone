import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDGxxjjynwTTlcWpDJFE3r0SEJ0pb6sDew",
    authDomain: "linkdin-clone-37297.firebaseapp.com",
    projectId: "linkdin-clone-37297",
    storageBucket: "linkdin-clone-37297.appspot.com",
    messagingSenderId: "1013674607769",
    appId: "1:1013674607769:web:afea30f44d54d1fa6ca408"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export  {db , auth};
  