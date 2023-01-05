import React, { useState, useEffect } from "react";
import "../Home.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Home(props) {
  let emptyPerson = {
    name: "",
    age: "",
    ethnicity: "",
    location: "",
    hobbies: "",
    occupation: "",
    image: "",
  };

  const [form, setForm] = useState(false);
  const [person, setPerson] = useState(emptyPerson);
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  const handleChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(person);
  };

  const getAddForm = () => {
    setForm(!form);
    setRegister(false);
    setLogin(false);
  };

  const getRegister = () => {
    setRegister(!register);
    setLogin(false);
    setForm(false);
  };

  const getLogin = () => {
    setLogin(!login);
    setForm(false);
    setRegister(false);
  };

  return (
    <div className="homepage">
      <div className="background-img"></div>
      <nav className="nav pt-3">
        <h1 className="ms-2 logo">
          L<FavoriteBorderIcon />
          veStruck
        </h1>
        <Button onClick={getLogin} className="me-2" variant="danger">
          Login
        </Button>
        {/* {login ? (
          <div>
            <Form className="login">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p>
              Don't have an account?{" "}
              <Button onClick={getRegister}>Signup here</Button>
            </p>
          </div>
        ) : (
          <></>
        )} */}
      </nav>
      <div className="home-content">
        <h1>Welcome to LoveStruck!</h1>
        <div classname="">
          <Button onClick={getRegister} variant="warning">
            Register
          </Button>
          {register ? (
            <div className="container mt-2">
              <h5>Sign up to start dating!</h5>
              <Form className="sign-up-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    className="input-field"
                    type="text"
                    placeholder="Enter username"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <h5 className="mt-2">Already have an account?</h5>
              <Button onClick={getLogin} variant="danger">
                Login
              </Button>
              <hr />
              <h2>GET THE APP</h2>
            </div>
          ) : (
            <></>
          )}
          {login ? (
            <div>
              <Form className="login mt-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className="mb-3" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <p>
                Don't have an account?{" "}
                <Button onClick={getRegister}>Sign up here</Button>
              </p>
            </div>
          ) : (
            <></>
          )}

          <Button onClick={getAddForm} className="ms-2" variant="warning">
            Create Profile
          </Button>
        </div>
        {form ? (
          <>
            <Form className="mt-2 profile-form" onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={person.name}
                    placeholder="Full Name"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    value={person.age}
                    placeholder="Age"
                    min="0"
                    max="100"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Hobbies</Form.Label>
                <Form.Control
                  type="text"
                  name="hobbies"
                  value={person.hobbies}
                  placeholder="Hobbies"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={person.location}
                  placeholder="City, State"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={person.image}
                  placeholder="picture url"
                  onChange={handleChange}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control
                    type="text"
                    name="occupation"
                    value={person.occupation}
                    placeholder="Occupation"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Ethnicity</Form.Label>
                  <Form.Control
                    type="text"
                    name="ethnicity"
                    placeholder="Ethnicity"
                    value={person.ethnicity}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Home;
