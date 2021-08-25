import { Row, Container, Button, Col, ListGroup} from "react-bootstrap";
import React from "react";


import horror from "../BOOKS/horror.json";
import history from "../BOOKS/history.json";
import fantasy from "../BOOKS/fantasy.json";
import scifi from "../BOOKS/scifi.json";


class BookList extends React.Component {
  state = {
    selectedCategory: horror,
  };

  render() {
    return (
      <Container>
           <Button onClick={() => this.setState({selectedCategory: history})} variant="warning" className='m-2'>History</Button>{' '}
  <Button onClick={() => this.setState({selectedCategory: horror})} variant="warning" className='m-2'>Horror</Button>{' '}
  <Button onClick={() => this.setState({selectedCategory: fantasy})} variant="warning" className='m-2'>Fantasy</Button> 
  <Button onClick={() => this.setState({selectedCategory: scifi})} variant="warning" className='m-2'>Scifi</Button>{' '} 
        <Row>

          {this.state.selectedCategory.map((book) => (
            
              <ListGroup key={book.asin}>
  <ListGroup.Item>{book.title}</ListGroup.Item>
  </ListGroup>
              
             
            
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;


{/* <ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup> */}