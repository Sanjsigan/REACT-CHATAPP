import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB1KIyhy6BhBCTXlOKZvs-iMn--Ur3bY1k",
    authDomain: "newchat-20b5e.firebaseapp.com",
    projectId: "newchat-20b5e",
    storageBucket: "newchat-20b5e.appspot.com",
    messagingSenderId: "76609399306",
    appId: "1:76609399306:web:1b590eea97645c8d9bcdf3",
    measurementId: "G-8M4SYLJLZW"  

})  

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}