import React, { useState, useRef } from 'react'
import TinderCard from "react-tinder-card";
import ReactCardFlip from "react-card-flip";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { amber } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";

const Person = (props) => {
const [isFlippedId, setIsFlippedId] = useState(false);
  const person = props.person
  const cardRef = useRef();

  const handleClick = () => {
    
    // if there is a truthy id parameter, update state with said id to flip the corresponding card, else revert cards to original state
    // if (id) {
    //   setIsFlippedId(id);
    // } else {
    //   setIsFlippedId();
    // }
    setIsFlippedId(prev => !prev)
    console.log("card is flipped");
  };
  
  const handleClickX = () => {
    cardRef.current.swipe("left")
  }

  const handleClickHeart = () => {
    cardRef.current.swipe("right");
  }

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
            // onClick={getDetails}
            onClick={() => {
              handleClick(person.id);
            }}
          >
            <AddIcon></AddIcon>
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
            {/* <button onClick={handleClick}></button>
             */}
            <IconButton
              className="plus"
              sx={{ color: amber[50] }}
              // onClick={getDetails}
              onClick={handleClick}
            >
              <AddIcon></AddIcon>
            </IconButton>
          </div>
        </div>
      </ReactCardFlip>
      <div className="person-footer">
        <IconButton onClick={handleClickX}>
          <CloseIcon color="error" fontSize="large" />
        </IconButton>

        <IconButton onClick={handleClickHeart}>
          <FavoriteIcon color="success" fontSize="large" />
        </IconButton>
      </div>
    </TinderCard>
  );
}

export default Person;