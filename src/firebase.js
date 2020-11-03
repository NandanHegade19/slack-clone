import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDrlzbFL7kR-RKxlktNW6xePGn6MjSxQrk",
    authDomain: "slack-clone-ff2bf.firebaseapp.com",
    databaseURL: "https://slack-clone-ff2bf.firebaseio.com",
    projectId: "slack-clone-ff2bf",
    storageBucket: "slack-clone-ff2bf.appspot.com",
    messagingSenderId: "622441384421",
    appId: "1:622441384421:web:87685493baaf8e8c60070c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;