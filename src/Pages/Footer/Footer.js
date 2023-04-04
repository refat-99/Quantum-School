import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-full'>
            <Container>
                <Row className='footer-main'>
                    <Col>
                     <h6>Copyright Policy</h6>
                     <p>About Us</p>
                     <p>Terms & Condition</p>
                     <p>Privacy Policy</p>
                     <p>Digital Millennium Copyright Act</p>
                     </Col>

                    <Col>  
                    <img className='foot-img' src='logo.png'></img>
                    <h6>Help</h6>
                    <p>FAQ's</p>
                    <p>Contact Us</p>
                    <p>Mamually Update</p>
                    </Col>

                    <Col>
                    <h6>Helpful Link</h6>
                     <p>College</p>
                     <p>Uncategorized</p>
                     <p>University</p>
                    </Col>

                    <Col>
                    <h6>Help & Support</h6>
                    <p>Contact Us</p>
                    <p>Activity</p>
                    <p>Members</p>
                    <p>Notice</p>
                    </Col>
                   
                </Row>
                
            </Container>
            <p className='copyright'>Site design / logo © 2023 Stack Exchange Inc; user contributions</p>
        </div>
    );
};

export default Footer;