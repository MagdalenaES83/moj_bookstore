import { Carousel, Container, Row } from "react-bootstrap"
import books from '../BOOKS/carousel.json'


const MyCarousel = () => {
return (

<Container>
<Row className="justify-content-center m-5">
<Carousel fade>
{books.map((book) => (
    
    <Carousel.Item key={book.asin}>
      <img
        className="d-block caro"
        src={book.img}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className='title'>{book.title}</h3>
        <p>.</p>
      </Carousel.Caption>
    </Carousel.Item>

    
 ))} </Carousel>
  
  
  </Row>
  </Container>
  
  )

}
export default MyCarousel