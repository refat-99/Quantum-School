import React from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';

const Service = (props) => {
        const {name,img,teacher,price} = props.course;
    return (
      <Col xs={12} md={3} className="cart  m-4 ms-5">
      <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src={img} />
 <Card.Body>
   <Card.Title>{name}</Card.Title>
   <Card.Text>
   You can learn online with a live instructor and chapter wise exam.
   </Card.Text>
 </Card.Body>
 <ListGroup className="list-group-flush">
   <ListGroup.Item>Teacher: {teacher}</ListGroup.Item>
   <b>fee:${price}</b>
 </ListGroup>
 <Card.Body>
     <Button>Enroll Now</Button>
 </Card.Body>
</Card>
   </Col> 
    );
};

export default Service;