import React,{useState, useEffect} from 'react'
import {db} from '../firebase'
import SignOut from './SignOut'
import SendMessage from './SendMessage';

function Chat(){
    const [message, setMessage]=useState([]);

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessage(snapshot.docs.map(doc => doc.data())) 
        })
    }, [])
    return (
        <div>
         <SignOut/>
         {message.map(({id, text, photoURL})=>(
                <div key={id}>
                    <img src={photoURL} alt=""/>
                    <p>{text}</p>
                </div>
         ))}
         <SendMessage/>
        </div>
    )
} 

export default Chat