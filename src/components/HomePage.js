import React, { useState, useEffect } from 'react';
import '../Home.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(props) {
    let emptyPerson = { name: '', age: '', ethnicity: '', location: '', hobbies: '', occupation: '', image: '' }

    const [form, setForm] = useState(false)
    const [person, setPerson] = useState(emptyPerson)
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)

    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(person)
    }

    const getAddForm = () => {
        setForm(!form)
        setRegister(false)
        setLogin(false)
    }

    const getRegister = () => {
        setRegister(!register)
        setLogin(false)
        setForm(false)
    }

    const getLogin = () => {
        setLogin(!login)
        setForm(false)
        setRegister(false)
    }

    return (
        <div className='homepage'>
            <nav className='nav'>
                <h1>LoveStruck</h1>
                <Button onClick={getLogin} variant="danger">Login</Button>
                {login ?
                    <div>
                        <Form>
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
                        <p>Don't have an account? <Button onClick={getRegister}>Signup here</Button></p>
                    </div> : <></>
                }
            </nav>

            <h1>Welcome</h1>
            <Button onClick={getRegister} variant="danger">Register</Button>
            {register ?
                <div className="container">
                    <p>Welcome to loveStruck!</p>
                    <p>Signup to start dating</p>
                    <Form>
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

                    <hr />
                    <h2>GET THE APP</h2>
                </div>
                : <></>
            }

            <Button onClick={getAddForm} variant="danger">Create Profile</Button>
            {
                form ? <>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={person.name} placeholder="Full Name" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" name="age" value={person.age} onChange={handleChange} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Hobbies</Form.Label>
                            <Form.Control type="text" name="hobbies" value={person.hobbies} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" name="location" value={person.location} placeholder="City, State" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" name="image" value={person.image} placeholder="picture url" onChange={handleChange} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Occupation</Form.Label>
                                <Form.Control type="text" name="occupation" value={person.occupation} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Ethnicity</Form.Label>
                                <Form.Control type="text" name="ethnicity" value={person.ethnicity} onChange={handleChange} />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </> : <></>
            }

        </div >
    )
}

export default Home;
