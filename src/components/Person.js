import React, { useState, useRef } from "react";
import '../Cards.css';
import TinderCard from "react-tinder-card";
import ReactCardFlip from "react-card-flip";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { amber } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";

const Person = (props) => {
  const [isFlippedId, setIsFlippedId] = useState(false);
  const person = props.person;
  const cardRef = useRef();
  console.log(person);

  const handleClick = () => {
    setIsFlippedId((prev) => !prev);
    console.log("card is flipped");
  };

  const swipe = (dir) => {
    cardRef.current.swipe(dir);
  };

  return (
    <TinderCard
      className="swipe"
      key={person.id}
      preventSwipe={["up", "down"]}
      ref={cardRef}
    >
      <ReactCardFlip isFlipped={isFlippedId} flipDirection="horizontal">
        <div
          style={{ backgroundImage: `url(${person.image})` }}
          className="profile-card"
        >
          <h3>
            {person.name}, {person.age}
          </h3>
          <IconButton
            className="plus"
            sx={{ color: amber[50] }}
            onClick={() => {
              handleClick();
            }}
          >
            <AddIcon></AddIcon>
            <Link to={`/dating/edit/${person.id}`}>

            </Link>
          </IconButton>
        </div>
        <div>
          <div className="details">
            <p>
              <b>Hobbies:</b> {person.hobbies}
            </p>
            <p>
              <b>Location:</b> {person.location}
            </p>
            <p>
              <b>Occupation:</b> {person.occupation}
            </p>
            <IconButton
              className="plus"
              sx={{ color: amber[50] }}
              onClick={handleClick}
            >
              <AddIcon></AddIcon>
            </IconButton>
          </div>
        </div>
      </ReactCardFlip>
      <div className="person-footer">
        <IconButton onClick={() => swipe("left")}>
          <CloseIcon color="error" fontSize="large" />
        </IconButton>

        <IconButton onClick={() => swipe("right")}>
          <FavoriteIcon color="success" fontSize="large" />
        </IconButton>
      </div>
    </TinderCard>
  );
};

export default Person;
