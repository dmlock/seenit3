
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHp_aFxTbnaMw5bUOV1mM1WN4EUoXkfic",
    authDomain: "seenit3-fd07b.firebaseapp.com",
    projectId: "seenit3-fd07b",
    storageBucket: "seenit3-fd07b.appspot.com",
    messagingSenderId: "960881866270",
    appId: "1:960881866270:web:f0e692b3ccc0e209d3200f",
    measurementId: "G-C0F296LCGJ"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };