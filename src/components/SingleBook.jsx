import {Col, Row, Card, Container, ListGroup,  ListGroupItem} from 'react-bootstrap'
import React from "react"

class  SingleBook extends React.Component {
    render() { 
    return ( 
    
   
 <Container>
  <Row>


    <Col md={6} lg={6}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.book.img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      {this.props.book.title}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
   
  </ListGroup>
  
</Card></Col>
  </Row>
</Container> 
)

   }
}
export default SingleBook