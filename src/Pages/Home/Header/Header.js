import React from 'react';
import { Container, Nav, Navbar,Button, DropdownButton, Dropdown,ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth' ;
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
             <Navbar className="header py-3 " collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href as={Link} to="/home">TravelHub</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/products">All Products</Nav.Link>
                    
                    {/* <Nav.Link as={Link} to="/myPackages">My Packages</Nav.Link> */}
                    {/* <Nav.Link as={Link} to="/managePackages">Manage Packages</Nav.Link> */}
                    { user.email &&
                    
                        <DropdownButton  style={{margin:'0 10px'}} as={ButtonGroup} title="DashBoard" id="bg-nested-dropdown">
                        <Dropdown.Item style={{color:'black'}} eventKey="1"><Nav.Link as={Link} style={{color:'black'}} to="/pay">Pay</Nav.Link></Dropdown.Item>
                        <Dropdown.Item  eventKey="2"><Nav.Link as={Link} style={{color:'black'}} to="/myOrder">My Orders</Nav.Link></Dropdown.Item>
                        <Dropdown.Item style={{color:'black'}} eventKey="3"><Nav.Link as={Link} style={{color:'black'}} to="/review">Review</Nav.Link></Dropdown.Item>
                      </DropdownButton>
                      
                    }

                    {
                        user.email ? <Button onClick={logOut} variant="warning">Log Out</Button>               
                        : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                                
                    
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;