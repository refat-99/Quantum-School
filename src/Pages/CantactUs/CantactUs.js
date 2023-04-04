import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CantactUs.css'

const CantactUs = () => {
    return (
        <>
            <div className='cantact-head'>
                <h2>Contact Us</h2>
                <p>Contact us using enything</p>
            </div>
            <Container>
                <Row >
                    <Col xs={4}>
                    <div className='cantact-location'>
                    <h4>Office Location</h4>
                    <p>1205,Gulshan-2,Dhaka,Bangladesh</p>
                    </div>
                    <div className='cantact-email'>
                        <h4>Contact E-Mail</h4>
                        <p>supporte@quantum.com</p>
                    </div>
                    <div className='cantact-number'>
                        <h4>Cantact Number</h4>
                        <p>+8801773886142</p>

                    </div>
                    </Col>
             
                    <Col xs={8} className='form-col'>
                <h3>Have any Question?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                           
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Massage or Comment</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                     </Col>
                </Row>
                </Container>

                </>
       
    );
};

export default CantactUs;