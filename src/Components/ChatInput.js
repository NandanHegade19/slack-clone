import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from '../firebase';
import '../Styles/ChatInput.css';
import firebase from 'firebase';
import { useStateValue } from '../StateProviderContext';

function ChatInput({channelName, channelId}) {

    const [input, setInput] = useState('');
    const [{user}] = useStateValue();
    
    const sendMessage = (e) => {
        e.preventDefault();
        if(channelId){
            db.collection('channels').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImg: user.photoURL
            })
        }
    }
    return (
        <div className = "chatinput">
            <form>
                <input type="text" onChange = {e => setInput(e.target.value)} 
                placeholder = {`Message #${channelName?.toLowerCase()}`}/>
                <Button type = "submit" onClick = {sendMessage}>Send</Button>
            </form>
        </div>
    )
}

export default ChatInput
