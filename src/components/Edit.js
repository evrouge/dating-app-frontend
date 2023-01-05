import React, { useState } from 'react';
import '../Edit.css';
import { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function Edit(props) {
    const [person, setPerson] = useState({ ...props.person })


    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleUpdate(person)
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
    )
}

export default Edit;
