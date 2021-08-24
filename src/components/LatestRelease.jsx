import { Card, Container, Col, Row } from "react-bootstrap";
import books from "../BOOKS/horror.json";



const  LatestRelease = ()=> {     
  return (
      <Container>
       <Row className="justify-content-center mt-5">
          {books.map((book) => (
            <Col md={4} lg={2}>
              <Card key={book.asin} >
                <Card.Img
                className='mb-1, bg-transparent'
                  variant="top"
                  src={book.img}                />
               
              </Card>
            </Col>
          ))}
        </Row>       
      </Container>
    );  }
  

export default LatestRelease;
