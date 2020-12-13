import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCp9Ut3v5y_4P899bMwgZttxPzXDsDgwQE",
    authDomain: "discord-clone-fe5b9.firebaseapp.com",
    databaseURL: "https://discord-clone-fe5b9.firebaseio.com",
    projectId: "discord-clone-fe5b9",
    storageBucket: "discord-clone-fe5b9.appspot.com",
    messagingSenderId: "216946987005",
    appId: "1:216946987005:web:070a38cc6bc4331209d394",
    measurementId: "G-D3TGW25WB1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =  firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider();


export { auth , provider };
export default db;