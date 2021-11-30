import React,{useState, useEffect ,useRef} from 'react'
import {auth, db} from '../firebase'
import SignOut from './SignOut'
import SendMessage from './SendMessage';


function Chat(){ 
    const scroll = useRef()
    const [message, setMessage]=useState([]);

    useEffect(() => { 
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessage(snapshot.docs.map(doc => doc.data()))  
        }) 
    }, []) 

    return (
        <div>
         <SignOut/>
         <div className="msgs"> 

         {message.map(({id, text, photoURL ,uid})=>(
             <div>
                <div key={id} className={`msg ${uid === auth.currentUser.uid ?  `sent` :`received`}`}>
                    <img src={photoURL} alt=""/>
                    <p>{text}</p>
                </div>
            </div> 
         ))} 

         </div>
        
         <SendMessage scroll={scroll}/>  
         <div ref={scroll}></div>
        </div>     
    )
} 

export default Chat 