// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
// import Cards from "./components/Cards";
import './Cards.css';
import Footer from "./components/Footer";
// import AddIcon from "@mui/icons-material/Add";
// import IconButton from "@mui/material/IconButton";
import Home from "./components/HomePage";
import Chat from "./components/Chat";
import Edit from "./components/Edit";
import Person from "./components/Person";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let [people, setPeople] = useState([]);
  const [details, setDetails] = useState(false);
  // const [isFlippedId, setIsFlippedId] = useState();

  // holds the user information when creating a new user
  let [users, setUsers] = useState();

  //USED FOR LOGIN FORM
  let emptyUser = {email: '', password: ''};
  const [user,setUser] = useState(emptyUser);


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

  const handleLogin = (loggedInUser) => {
    axios
      .put("https://serene-mountain-09515.herokuapp.com/api/dating/login", loggedInUser)
      .then((response) => {
        setUsers(response.data)
        setPeople(people.filter(person => person.id !== response.data.id))
      })
  }

  const handleUpdate = (editUser) => {
    axios
      .put(
        "https://serene-mountain-09515.herokuapp.com/api/dating/" + editUser.id, editUser
      )
      .then((response) => {
        handleLogin({email: editUser.email, password: editUser.password})
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
                <Header />{" "}
                <Edit
                  getPeople={getPeople}
                  users={users}
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
            element={<Home getPeople={getPeople} handleCreate={handleCreate} handleLogin={handleLogin} user={user} setUser={setUser} />}
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
