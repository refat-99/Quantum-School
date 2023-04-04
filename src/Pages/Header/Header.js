import React from 'react';
import { Container, Navbar,Nav, Button, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
          
            <Navbar bg="light" variant="light">
        <Container className='Nav-container'>
          <img className='header-img' src='/logo2.jpg' alt='image'/>
            <Nav className="me-auto ms-5">
            <NavLink to="/home" className='NavLink'>Home</NavLink>
            <NavLink to="/service" className='NavLink'>Services</NavLink>
            <NavLink to="/teacher" className='NavLink'>Teacher</NavLink>
            <NavLink to="/about" className='NavLink'>About</NavLink>  
             
        </Nav>
        <NavLink className='me-3 NavLink' to='/cantactus'>Cantact Us</NavLink>
        <NavLink className='me-3 NavLink' to='/logIn'>
          <Button variant="primary">Log In</Button>
          </NavLink>
        
        </Container>
    
      </Navbar>
        </div>
    );
};

export default Header;