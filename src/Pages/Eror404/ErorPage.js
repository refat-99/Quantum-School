import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Eror404.css'

const ErorPage = () => {
    return (
        <div className='main-container'>
            <Container>
                <Row>
                  
                    <Col>
                        <h1>Oops!</h1>
                        <h4>Page Not Found 404</h4>
                        <Link to='/home'><Button>Back to Home</Button></Link>
                        

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default ErorPage;