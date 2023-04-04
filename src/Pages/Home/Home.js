import React, { useEffect, useState } from 'react';
import { Row ,Col, Container} from 'react-bootstrap';
import Course from '../Course/Course';
import InfoData from '../Hooks/AllData';
import Slider from '../Slider/Slider';
import './Home.css'


const Home = () => {
    const [courses,setCourses] = InfoData([]);
    console.log(courses)

    return (
        <div className='container-main'>
            <Slider></Slider>
        <Container >
        <Row>
            <Col>
               
              <Row className="course-container mt-5 pt-5">
                    <h2 className=" text-light fw-bold">Running Courses</h2>
                    { 
                    courses.slice(0, 6).map(course => <Course
                    course={course}
                    key={course.id}
                    ></Course>)
                            }
             </Row>
         </Col>
        </Row>
        </Container>
        </div>
    );
};

export default Home;