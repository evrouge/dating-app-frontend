import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import TinderCard from "react-tinder-card";
import ReactCardFlip from "react-card-flip";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { amber } from "@mui/material/colors";
import "../Cards.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function Cards(props) {
  // let [people, setPeople] = useState([]);
  const [details, setDetails] = useState(false);
  const [isFlippedId, setIsFlippedId] = useState();

  // const getPeople = () => {
  //   axios.get("https://serene-mountain-09515.herokuapp.com/api/dating").then(
  //     (response) => setPeople(response.data),
  //     (err) => console.log(err)
  //   );
  // };

  const getDetails = () => {
    setDetails(!details);
  };

  const handleClick = (id) => {
    console.log(id);
    // if there is a truthy id parameter, update state with said id to flip the corresponding card, else revert cards to original state
    if (id) {
      setIsFlippedId(id);
    } else {
      setIsFlippedId();
    }
    console.log("card is flipped");
  };

  useEffect(() => {
    props.getPeople();
  }, []);

  return (
    <div>
      <div className="containerCard">
        {props.people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.id}
              preventSwipe={["up", "down"]}
            >
              <ReactCardFlip
                isFlipped={isFlippedId === person.id}
                flipDirection="horizontal"
              >
                <div
                  style={{ backgroundImage: `url(${person.image})` }}
                  className="cardd"
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
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
