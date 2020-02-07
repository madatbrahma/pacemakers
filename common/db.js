
import firebase from 'firebase';


let firebaseConfig = {
    apiKey: "AIzaSyDoBnrjpEvBMkxixgER9ahxim7TUzUTsn4",
    authDomain: "pacemakers-training.firebaseapp.com",
    databaseURL: "https://pacemakers-training.firebaseio.com",
    projectId: "pacemakers-training",
    storageBucket: "pacemakers-training.appspot.com",
    messagingSenderId: "571552619528",
    appId: "1:571552619528:web:23167ec9a273d5d233c5bd",
    measurementId: "G-NQQF8KGD60"
  };

firebase.initializeApp(firebaseConfig);

let db = firebase.database();

// Get a reference to the database service
export default db;