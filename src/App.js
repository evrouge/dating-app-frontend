import { useState, useEffect } from "react";
import axios from "axios";
// import './App.css';
import MessageScreen from "./components/MessageScreen";
import Header from "./components/Header";
import './Cards.css';
import Home from "./components/HomePage";
import Chat from "./components/Chat";
import Edit from "./components/Edit";
import Person from "./components/Person";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  let [people, setPeople] = useState([]);

  // holds the user information when creating a new user
  let [users, setUsers] = useState();

  //USED FOR LOGIN FORM
  let emptyUser = { email: '', password: '' };
  const [user, setUser] = useState(emptyUser);

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
        handleLogin({ email: editUser.email, password: editUser.password })
        getPeople();
      });
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/dating/messages/:person"
            element={
              <div>
                <Header />
                <MessageScreen />
              </div>
            }
          ></Route>
          <Route
            path="/dating/messages"
            element={
              <div>
                <Header />
                <Chat />
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
