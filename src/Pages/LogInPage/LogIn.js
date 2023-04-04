import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import './LogIn.css'

const LogIn = () => {


  return (
    <Container className="mt-5 pt-5 login-container">
      <h1>Log In</h1>
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
           
          />
        </Form.Group>

        <Form.Group  controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
        
      </Form>
    </Container>
  );
};

export default LogIn;
