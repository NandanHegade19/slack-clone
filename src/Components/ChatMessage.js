import React, { useState } from 'react';
import '../Styles/ChatMessage.css';



function ChatMessage({message, timestamp, user, userImg}) {
    return (
        <div className = "chatmessage">
            <img src = {userImg} alt=""/>
            <div className = "chatmessage__info">
                <h4>{user} <span className = "chatmessage__timestamp">{new Date(timestamp?.toDate()).toUTCString()} </span> </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ChatMessage;
