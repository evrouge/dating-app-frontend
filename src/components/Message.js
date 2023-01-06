import React from 'react';
import Avatar from '@mui/material/Avatar';
import '../Chat.css';
import { Link } from "react-router-dom";

function Message ({name, message, profilePic, timestamp}){
    return (
        <Link to={`/dating/messages/${name}`}>
            <div className="message">
                <Avatar className="message-image" src={profilePic}/> 
                {/* imported from material ui, so the image works as an icon for the chat */}
                <div className='message-details'>
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className='timestamp'>{timestamp}</p>

            </div>
        </Link>
    )
}

export default Message;