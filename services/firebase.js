import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBRKzcCJ8edPKsvZe5yOSOwW_BgnpBDYE0",
  authDomain: "evite-71cc5.firebaseapp.com",
  databaseURL: "https://evite-71cc5.firebaseio.com",
  projectId: "evite-71cc5",
  storageBucket: "evite-71cc5.appspot.com",
  messagingSenderId: "124082647348",
  appId: "1:124082647348:web:63cf933e29e0cf0087b561",
  measurementId: "G-5WL0L8W73V"
};

//const fb = firebase.initializeApp(firebaseConfig)

export const db = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
