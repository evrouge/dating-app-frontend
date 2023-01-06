import React, { useState } from "react";
import "../Edit.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Edit(props) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // MODAL
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [person, setPerson] = useState({
    id: props.users.id,
    email: props.users.email,
    password: '',
    name: props.users.name,
    age: props.users.age,
    ethnicity: props.users.ethnicity,
    location: props.users.location,
    hobbies: props.users.hobbies,
    occupation: props.users.occupation,
    image: props.users.image,
  });

  const handleChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleUpdate(person);
    navigate('/dating');
  };

  const handleDelete = (event) => {
    console.log('handle delete')
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <img className="profile" src={person.image} />
      <div className="container">
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
              <Form.Text className="text-muted">
                Re-enter Password
              </Form.Text>
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

        <p
          className="mt-3"
          variant="danger"
          type="button"
          onClick={handleShow}
          value={props.users.id}
        >
          Delete Profile
        </p>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Are you sure you want to delete your profile?
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>

  );
}

export default Edit;
