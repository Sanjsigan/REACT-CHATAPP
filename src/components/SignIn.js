import React from 'react'
import firebase from 'firebase';
import { auth } from '../firebase';

function SignIn(){
    
    function signinWithGoogle(){
        const provide = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provide);
    }  

    return ( 
        <div className="navbar navbar-light bg-light justify-content-between headerSty"style={{position:'fixed'}} >
             <h2>Chat🔥</h2> 
            <button className="btn btn-primary" onClick={signinWithGoogle} >Signin with Google</button> 
        </div> 
    ) 
} 

export default SignIn 