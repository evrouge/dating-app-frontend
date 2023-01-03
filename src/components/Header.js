import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import '../Header.css';


function Header (){
    return(
        <div className="header">
            <IconButton>  
                <PersonIcon />
            </IconButton> 
            <h1>❤️</h1>
            <IconButton>
                <ChatIcon />
            </IconButton> 
        </div>
    )
}

export default Header;