import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAX7T3veIQuvkARO7fV6iqpuGel4IIa1Yo",
    authDomain: "ecommerce-project-51c1e.firebaseapp.com",
    projectId: "ecommerce-project-51c1e",
    storageBucket: "ecommerce-project-51c1e.appspot.com",
    messagingSenderId: "575311173708",
    appId: "1:575311173708:web:7105876523043321f0bce9"
  };

  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()

  export {auth,db,storage}