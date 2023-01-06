import React from 'react';
import '../Chat.css';
import Message from './Message';

function Chat() {
    return (
        <div className="chats">
            <Message
                name="Joey Tribbianni"
                message="How you doing?"
                timestamp="1 minute ago"
                profilePic="https://s1.r29static.com/bin/entry/b52/0,46,460,460/1200x1200,80/1471901/image.jpg"
            />

            <Message
                name="Brad Pitt"
                message="wanna grab dinner later?"
                timestamp="40 minutes ago"
                profilePic="https://media1.popsugar-assets.com/files/thumbor/2jN6JzarW7ChXO0pwh4MTHA9XCs/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/08/01/764/n/1922398/37ceff6e79291a98_GettyImages-1165186712/i/Hot-Brad-Pitt-Pictures-2019.jpg"
            />
            
            <Message
                name="Angelina Jolie"
                message="Sorry. Busy dat at work. We can meet at 7pm."
                timestamp="3 hours ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/800px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg" 
            />

            <Message
                name="Zooey Deschanel"
                message="Maybe next week."
                timestamp="1 week ago"
                profilePic="https://assets.mycast.io/actor_images/actor-zooey-deschanel-138816_large.jpg?1603673775" 
            />

        </div>
    )
}

export default Chat;
