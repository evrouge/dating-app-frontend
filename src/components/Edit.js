import React, { useState } from "react";
import "../Edit.css";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useNavigate } from "react-router-dom";

function Edit(props) {
  const [person, setPerson] = useState();
    const personId = useParams().id;
    const navigate = useNavigate();

  const handleChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      props.handleUpdate(person);
      navigate('/dating');
  };

  useEffect(() => {
    props.getPeople();
  }, []);
    useEffect(() => {
      // when pg loads, it will look for the person with the same ID as the URL and set it in state
      console.log(props.people);
      const foundPerson = props.people.find((person) => { // props.people is an array. .find() is a method to look for something within an array when the matching condition passes.
        // convert the personId from the url to an integer because it's a string by default
        return person.id === parseInt(personId); // matching condition
      });
      console.log(foundPerson);
      setPerson(foundPerson);
    }, [props.people]);
  console.log(person);

  // if person is not found, show error message
  if (!person) {
    return (
      <div>
        <h2>Person not found.</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Edit</h1>
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
    </div>
  );
}

export default Edit;
