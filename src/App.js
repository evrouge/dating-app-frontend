import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Home from "./components/HomePage";
import Chat from "./components/Chat";
import Edit from "./components/Edit";
import Person from "./components/Person";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(props) {
  let [people, setPeople] = useState([]);
  const [details, setDetails] = useState(false);
  const [isFlippedId, setIsFlippedId] = useState();

  const getDetails = () => {
    setDetails(!details);
  };

  useEffect(() => {
    getPeople();
  }, []);

  const getPeople = () => {
    axios.get("https://serene-mountain-09515.herokuapp.com/api/dating").then(
      (response) => setPeople(response.data),
      (err) => console.log(err)
    );
  };

  const handleCreate = (addPerson) => {
    axios
      .post("https://serene-mountain-09515.herokuapp.com/api/dating", addPerson)
      .then((response) => {
        console.log(response);
        getPeople();
      });
  };

  const handleUpdate = (editPerson) => {
    axios
      .put(
        "https://serene-mountain-09515.herokuapp.com/api/dating" +
          editPerson.id,
        editPerson
      )
      .then((response) => {
        getPeople();
      });
  };

  return (
    <Router>
      <div className="App">
        {/* <Router> */}
        <Routes>
          <Route
            path="/dating/messages"
            element={
              <div>
                <Header /> <Chat /> <Footer />
              </div>
            }
          ></Route>
          <Route
            path="/dating/edit/:id"
            element={
              <div>
                <Header />{" "}
                <Edit
                  getPeople={getPeople}
                  people={people}
                  handleUpdate={handleUpdate}
                />{" "}
                {/* <Footer /> */}
              </div>
            }
          ></Route>
          <Route
            path="/dating"
            element={
              <div>
                <Header />
                <div className="containerCard">
                  {people.map((person) => {
                    return <Person key={person.id} person={person} />;
                  })}
                </div>
              </div>
            }
          ></Route>
          <Route
            path="/"
            element={<Home getPeople={getPeople} handleCreate={handleCreate} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{
  /* <Cards getPeople={getPeople} people={people} /> */
}
