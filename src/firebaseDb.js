import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB39pnmM37Wy336PdVE1LFVKLYh-407bzg",
    authDomain: "dbturck.firebaseapp.com",
    projectId: "dbturck",
    storageBucket: "dbturck.appspot.com",
    messagingSenderId: "866205299668",
    appId: "1:866205299668:web:5ae9f98ae3e7db9c955c41",
    measurementId: "G-1GVEDM65N9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();