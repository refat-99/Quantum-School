import React from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';


const TeacherCard = (props) =>{
    const {pic,teacher,price,name} = props.course;
    console.log(pic)
    return(
        <Col xs={12} md={3} className="cart  m-4 ms-5">
        <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={pic} />
   <Card.Body>
     <Card.Title>{teacher}</Card.Title>
     <Card.Text>
     You can learn online with a live instructor and chapter wise exam.
     </Card.Text>
   </Card.Body>
   <ListGroup className="list-group-flush">
     <ListGroup.Item>Course: {name}</ListGroup.Item>
     <b>fee:${price}</b>
   </ListGroup>
   
  </Card>
     </Col> 
    )
}

export default TeacherCard;