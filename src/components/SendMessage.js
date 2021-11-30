import React,{useState} from 'react'
import {db,auth} from '../firebase'
import firebase from 'firebase'
import {FaTelegramPlane} from 'react-icons/fa'


function SendMessage({scroll}) { 

    const [msg, setMessage]= useState('')

    async function msgSend(e){
        e.preventDefault() 

        if(!msg){
            alert("Pleace Type message!")
            return;
        }
        const {uid, photoURL}=auth.currentUser

        await db.collection('messages').add({
            text:msg,
            photoURL,
            uid,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
        })

        setMessage('') 
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
      
          
            <form onSubmit={msgSend}>
                  <div className="sendMsg">
                <input  className="form-control" style={{width:400}} value={msg} onChange={(e)=>setMessage(e.target.value)} placeholder="Type message..."/>
                <button className="btn btn-primary" type="submit"><FaTelegramPlane/></button>
                </div>
            </form>
   
      
    )
}

export default SendMessage
