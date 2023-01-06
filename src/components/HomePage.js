import React, { useState, useEffect } from "react";
import "../Home.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

function Home(props) {
  let emptyPerson = {
    email: "",
    password: "",
    name: "",
    age: "",
    ethnicity: "",
    location: "",
    hobbies: "",
    occupation: "",
    image: ""
  };

  const [form, setForm] = useState(false);
  const [person, setPerson] = useState(emptyPerson);
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  const handleUserChange = (event) => {
    props.setUser({ ...props.user, [event.target.name]: event.target.value })
  }

  const handleUserSubmit = (event) => {
    event.preventDefault();
    props.handleLogin(props.user)
    event.target.reset();
    navigate("/dating")
  }

  const handleChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(person);
    setLogin(true);
    setForm(false);
  };

  const getAddForm = () => {
    setForm(!form);
    setLogin(false);
  };

  const getLogin = () => {
    setLogin(!login);
    setForm(false);
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
      </nav>

      <div className="home-content">
        <h1>Welcome to LoveStruck!</h1>
        <div className="">
          {login ? (
            <div>
              <Form className="login mt-2" onSubmit={handleUserSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name='email' value={props.user.email} placeholder="Enter email" onChange={handleUserChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' value={props.user.password} placeholder="Enter password" onChange={handleUserChange} />
                </Form.Group>

                <Button className="mb-3" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <p>
                Don't have an account?{" "}
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
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={person.email}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>

                </Form.Group>

                <Form.Group as={Col} controlId="formGridAge">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={person.password}
                    placeholder="password"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

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

            <h5 className="mt-2">Already have an account?</h5>
            <Button onClick={getLogin} variant="danger">
              Login
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div >
  );
}

export default Home;
