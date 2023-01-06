import React from'react';
import { useState } from "react";
import '../MessageScreen.css';
import Avatar from '@mui/material/Avatar';

function MessageScreen(){
    // this is in case we want be able to see our input message added on the chat screen
    const [input, setInput] = useState('')
    // to keep track of the messages that come in we are creating a hook for it
    const [messages, setMessages] = useState([
        {
            name: 'Joey Tribbianni',
            image: 'https://s1.r29static.com/bin/entry/b52/0,46,460,460/1200x1200,80/1471901/image.jpg',
            message: 'Good Morning!'
        },
        {
            name: 'Joey Tribbianni',
            image: 'https://s1.r29static.com/bin/entry/b52/0,46,460,460/1200x1200,80/1471901/image.jpg',
            message: 'How you doing?'
        },
        {
            message: 'what up'
        }
    ])

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}])
        setInput('');
    }

    return (
        <div className='messageScreen'>
            <p className='matched'>YOU MATCHED WITH JOEY TRIBBIANNI ON 22/12/22</p>
            {messages.map((message) =>(
                message.name ? (
                    <div className='messagescreen-message'>
                        <Avatar className='avatar' alt={message.name} src={message.image} />
                        <p className='message-text'>{message.message}</p>
                    </div> ) :
                    (
                        <div className='messagescreen-message'>
                         <p className='message-text-me'>{message.message}</p>
                        </div>
                    )
                
            ))}
            {/* this is so we can type a message on the chat screen */}
           
                <form className='input'>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="inputField" type="text" placeholder='Type a message...' />
                    <button type="submit" onClick={handleSend} className='send-btn'>SEND</button>
                </form>
           
        </div>
    )
}

export default MessageScreen;
