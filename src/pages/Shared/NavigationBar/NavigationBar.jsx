import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContex } from '../../../Provider/AuthProvider';
import { useContext } from 'react';
const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContex)

    const handleLogOut =()=>{
        logOut()
        .then()
        .catch((error)=> {
            console.error(error)
        })
    }
    return (
             <Container>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                        <Nav.Link href="#features">
                          <Link to="/category/0">Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link> 
                        </Nav>
                            <Nav className='gap-2 d-flex justify-content-center'>
                            { user && 
                            <FaUserCircle style={{fontSize:"2rem"}}></FaUserCircle>
                            }
                            { user ? <Button onClick={handleLogOut} variant="secondary" >LogOut</Button> :
                                <Link to='/login'>  <Button variant="secondary">Login</Button></Link>
                            }
                            
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
    );
};

export default NavigationBar;