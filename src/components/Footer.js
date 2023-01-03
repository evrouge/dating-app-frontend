import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import '../Footer.css';

function Footer () {
    return(
        <div className="footer">
            <IconButton>
                <CloseIcon color="error" fontSize="large"/>
            </IconButton>

            <IconButton>
                <FavoriteIcon color="success" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Footer;