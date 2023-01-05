import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Home from "./components/HomePage";
import Chat from "./components/Chat";
import Edit from "./components/Edit";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let [people, setPeople] = useState([]);

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
            path="/dating/edit"
            element={
              <div>
                <Header /> <Edit /> <Footer />
              </div>
            }
          ></Route>
          <Route
            path="/dating"
            element={
              <div>
                <Header /> <Cards getPeople={getPeople} people={people} />{" "}
                {/* <Footer /> */}
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
