import React from 'react';
import InfoData from '../Hooks/AllData';
import { Col, Container, Row } from 'react-bootstrap';
import TeacherCard from './TeacherCard';
import '../Home/Home.css'


const Teacher = () =>{
    const [courses,setCourses] = InfoData([]);
    // console.log(courses)
        return (
            <Container>
                <Row>
                    <Col>
                    <h1 className="title">Our Best Teacher</h1>
                        <Row className="course-container mt-5 pt-2">
                            {
                                courses.map(course =><
                                    TeacherCard
                                    course ={course}
                                    key={course.id}
                                    >

                                </TeacherCard>)
                            }
                        </Row>

                    </Col>
                </Row>
            </Container>
        )
}

export default Teacher;
