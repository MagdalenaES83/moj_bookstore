import { Col, Row, Card, Container, ListGroup } from "react-bootstrap";
import React from "react";
import MyBadge from './MyBadge';

class SingleBook extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={this.props.book.img} />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                <Card.Title><MyBadge color='danger' title='SALE' /> {this.props.book.price}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush"></ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SingleBook;
