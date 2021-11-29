import React from 'react'
import {auth} from '../firebase'

function SignOut() {
    return (
        <div>
            <button className="btn btn-danger" onClick={()=>auth.signOut()}>Signout</button>
        </div>
    )
}

export default SignOut
