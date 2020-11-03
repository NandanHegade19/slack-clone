import React from 'react';
import { useHistory } from 'react-router-dom';
import db from '../firebase';
import '../Styles/SidebarOption.css';

function SidebarOption({Icon, title, id, addChannelOption}) {
    const history = useHistory();
    const selectChannel = () => {
        if(id){
            history.push(`/room/${id}`)
        }else{
            history.push(title);
        }
    }
    const addChannel = () => {
        const channelName = prompt("Please enter channel name");
        if(channelName){
            db.collection('channels').add({
                name: channelName
            })
        }
    }

    return (
        <div className = "sidebaroption" onClick = {addChannelOption ? addChannel : selectChannel}> 
            {Icon && <Icon className = "sidebaroption__icon"/>}
            {Icon ? (<h3>{title}</h3>) : (<h3 className = "sidebaroption__channel"><span className = "sidebaroption__hash">#{title}</span></h3>)}
        </div>
    )
}

export default SidebarOption;
