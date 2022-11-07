import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// Config goes here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMMjNZtDW7XAYiVo81UkZiDbF4G1wvHJ8",
  authDomain: "olx-clone-cae39.firebaseapp.com",
  projectId: "olx-clone-cae39",
  storageBucket: "olx-clone-cae39.appspot.com",
  messagingSenderId: "595010046806",
  appId: "1:595010046806:web:8245cf9753207db8f9e4f7",
  measurementId: "G-2W3K1GE66M"
};


export default firebase.initializeApp(firebaseConfig)

