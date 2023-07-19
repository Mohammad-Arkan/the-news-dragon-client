import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Provider/AuthProvider';
import { useState } from 'react';
const Register = () => {
    const {createUser} = useContext(AuthContex)
    const [success, setSuccess] = useState('')
const handleSignUp =(event) => {
    event.preventDefault()
 const form = event.target;
 const name = form.name.value;
 const photo = form.photo.value;
 const email = form.email.value;
 const password = form.password.value;
 const accept = form.accept.value;
console.log(name, photo, email, password, accept, )

createUser(email, password)
.then((result)=> {
    const loggedUser = result.user;
    console.log(loggedUser)
    setSuccess('User login Successful')
    form.reset()
})
 .catch((error)=> {
    console.log(error)
 })
}
    return (
        <Container className='bg-primary-subtle mx-auto w-50 mt-4 p-4'> 
        <h2>Register your account</h2>
        <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name </Form.Label>
            <Form.Control type="text" name='name' placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name='photo' placeholder="Enter photo url" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" name='accept' label="Accept Term & Conditions" />
        </Form.Group>
        <Button className='d-block mb-2' variant="primary" type="submit">
            Submit
        </Button>
        <Form.Text className="text-success d-block">
        Already have an Account please? <Link to="/login" className='text-danger'>LogIn</Link>
        </Form.Text>
        <Form.Text className="text-success">
            {success}
        </Form.Text>
</Form>
    </Container>
    );
};

export default Register;