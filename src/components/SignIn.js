import React from 'react'
import firebase from 'firebase';
import { auth } from '../firebase';

function SignIn(){
    function signinWithGoogle(){
        const provide = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provide);
    }
    return (
        <div>
            <button onClick={signinWithGoogle} >Signin with Google</button>
        </div>
    )
} 

export default SignIn