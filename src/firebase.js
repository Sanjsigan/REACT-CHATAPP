import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcP3U_mshMzUYnZDVMq-r_3tR_CZANCbo",
    authDomain: "chatfire-af25a.firebaseapp.com",
    projectId: "chatfire-af25a",
    storageBucket: "chatfire-af25a.appspot.com",
    messagingSenderId: "420852166858",
    appId: "1:420852166858:web:e264167791a9f1e0650433",
    measurementId: "G-VC5M3YBH7B"

})  

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}