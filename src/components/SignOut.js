import '../App.css';
import React from 'react'
import {auth} from '../firebase'

function SignOut() {
    return (
        <div className="navbar navbar-light bg-light justify-content-between headerSty" style={{position:'fixed'}} >
            <h2>Chat🔥</h2>
            <div className="form-inline">
            <img src={auth.currentUser.photoURL} alt="" style={{marginBottom:2}}/>
            <b>{auth.currentUser.displayName}</b>
            <button style={{marginLeft:10}} className="btn btn-danger" onClick={()=>auth.signOut()}>Signout</button>
            </div>
        </div>
    ) 
} 

export default SignOut 
