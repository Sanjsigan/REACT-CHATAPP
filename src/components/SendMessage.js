import React,{useState} from 'react'
import {db,auth} from '../firebase'
import firebase from 'firebase'

function SendMessage() {
    const [msg, setMessage]= useState('')

    async function msgSend(e){
        e.preventDefault()
        const {uid, photoURL}=auth.currentUser

        await db.collection('messages').add({
            text:msg,
            photoURL,
            uid,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
        })

        setMessage('')
    }
    return (
        <div>
            <form onSubmit={msgSend}>
                <input value={msg} onChange={(e)=>setMessage(e.target.value)} placeholder="Type message..."/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default SendMessage
