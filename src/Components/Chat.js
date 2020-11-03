import React, { useEffect, useState } from 'react';
import '../Styles/Chat.css';
import {useParams} from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

function Chat() {

    const {roomId} = useParams(); //comes from url
    const [channelDetails, setChannelDetails] = useState(null);
    const [roomMsgs, setRoomMsgs] = useState([]);
    
    useEffect(() => {
        if(roomId){
            db.collection("channels").doc(roomId).onSnapshot((snapshot) => setChannelDetails(snapshot.data()));
        }
        db.collection('channels').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => setRoomMsgs(snapshot.docs.map(doc => doc.data())));
    },[roomId]);
    
    return (
        <div className = "chat">
            <div className = "chat__header">
                <div className = "chat__header_left">
                    <h4 className = "chat__channelname"><strong># {channelDetails?.name} </strong>
                        <StarBorderOutlinedIcon/>
                    </h4>
                </div>
                <div className = "chat__header_right">
                    <p><InfoOutlinedIcon/> Details</p>
                </div>
            </div>
            <div className = "chat__messages">
                {roomMsgs?.map(({message, timestamp, user, userImg}) => (
                    <ChatMessage 
                        message = {message}
                        timestamp = {timestamp}
                        user = {user}
                        userImg = {userImg}/>
                ))}
            </div>
            <ChatInput channelName = {channelDetails?.name} channelId = {roomId}/>
        </div>
    )
}

export default Chat;
