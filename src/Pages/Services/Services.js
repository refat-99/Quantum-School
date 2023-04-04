import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import '../Course/Course.css'
import Service from '../Service/Service';
import '../Home/Home.css'
import InfoData from '../Hooks/AllData';
import Teacher from '../Teacher/Teacher';


const Services = () => {
    const [courses,setCourses] = InfoData([]);

    return (
        <div className='container-main'>
        <Container >
        <Row>
            <Col>
               
              <Row className="course-container mt-5 pt-5">
                    {/* <h2 className=" text-light fw-bold">Running Courses</h2> */}
                    { 
                    courses.map(course => <Service
                    course={course}
                    key={course.id}
                    ></Service>
                    )
                     }
             </Row>
         </Col>
        </Row>
        </Container>
        </div>
    );
};

export default Services;