import { Card, Container, Col, Row, Button } from "react-bootstrap";
import horror from "../BOOKS/horror.json";
import history from "../BOOKS/history.json";
import fantasy from "../BOOKS/fantasy.json";
import scifi from "../BOOKS/scifi.json";
import React from "react"
import MyBadge from './MyBadge';



class  LatestRelease extends React.Component {
  state ={ 
    selectedCategory: horror
  }
  


  render (){ 
  return (
      <Container>
        <Row> 
         
   <Button onClick={() => this.setState({selectedCategory: history})} variant="warning" className='m-2'>History</Button>{' '}
  <Button onClick={() => this.setState({selectedCategory: horror})} variant="warning" className='m-2'>Horror</Button>{' '}
  <Button onClick={() => this.setState({selectedCategory: fantasy})} variant="warning" className='m-2'>Fantasy</Button> 
  <Button onClick={() => this.setState({selectedCategory: scifi})} variant="warning" className='m-2'>Scifi</Button>{' '} 
  </Row> 
       <Row className="justify-content-center mt-5">
          {this.state.selectedCategory.map((book) => (
            <Col md={4} lg={2} key={book.asin}>
              <Card key={book.asin} >
                <Card.Img
                className='mb-1, bg-transparent'
                  variant="top"
                  src={book.img}                />
                  
                  <Card.Text className='p-1'>
                 
      {book.title}
    </Card.Text>
               <Button variant="warning"> <MyBadge color='danger' title='SALE' /> Price: {book.price}</Button>
              </Card>
            </Col>
          ))}
        </Row>    
      </Container>

      
    );  }}
  

export default LatestRelease;
