import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import auth from '../../Firebase/Firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                       SWMS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="manageInventory">ManageInventory</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            {user && <Nav.Link as={Link} to="myitem">My Item</Nav.Link>}
                           {user && <Nav.Link as={Link} to="addItem">Add Item</Nav.Link>}
                            {user?<Button onClick={()=>signOut(auth)}>Logout</Button> :<Nav.Link as={Link} to="login">Sing In</Nav.Link>}
                            <Nav.Link as={Link} eventKey={2} to="/register">
                                Sing Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;