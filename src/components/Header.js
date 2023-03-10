import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import IconButton from "@mui/material/IconButton";
import "../Header.css";
import { Link } from "react-router-dom";


function Header() {

  return (
      <div className="header">
        <div className="header-icons">
          <IconButton>
            <Link to="/dating/edit" className="link">
              <PersonIcon />
            </Link>
          </IconButton>

          <IconButton>
            <Link to="/dating" className="link">
              <h1>❤️</h1>
            </Link>
          </IconButton>

          <IconButton>
            <Link to="/dating/messages" className="link">
              <ChatIcon />
            </Link>
          </IconButton>
        </div>
      </div>
  );
}

export default Header;
