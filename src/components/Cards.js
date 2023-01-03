import { useEffect, useState } from "react";
import React from 'react';
import axios from "axios";
import TinderCard from 'react-tinder-card';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import {amber} from '@mui/material/colors';
import '../Cards.css';

function Cards () {
    let [people, setPeople] = useState([])
    const [details, setDetails] = useState(false)

    const getPeople = () => {
        axios
            .get('https://serene-mountain-09515.herokuapp.com/api/dating')
            .then((response) => setPeople(response.data), 
            (err) => console.log(err))
    }
    const getDetails = () => { 
        setDetails(!details)
    }
    
    useEffect (() => {
        getPeople();
    },[])

    return (
        <div>
            <div className="containerCard">
            {
                people.map((person) => {
                    return (
                        <TinderCard className="swipe" key={person.id} preventSwipe={["up", "down"]}>
                            <div style={{backgroundImage: `url(${person.image})`}} className="card">
                                <h3>{person.name}, {person.age}</h3>
                                <IconButton className="plus" sx={{color: amber[50]}} onClick={getDetails}>
                                    <AddIcon></AddIcon>
                                </IconButton>
                                {details ? <div className="details"><p><b>Hobbies:</b> {person.hobbies}</p>
                                <p><b>Location:</b> {person.location}</p>
                                <p><b>Occupation:</b> {person.occupation}</p></div> : null}
                            </div>
                        </TinderCard>
                    )
                }

            )}
            </div>
            
        </div>
    )
}

export default Cards;