import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import MyBadge from './MyBadge'
//import CommentArea from './CommentArea'

class SingleBook extends React.Component {

    state = {
        selected: false
    }

    render() {
        return (
            <>
            <Container> 
                <Row>   
                    <Col md={4}> 
                <Card
                    // onClick={() => this.setState({ selected: !this.state.selected })}
                    onClick={() => this.props.changeSelectedBook(this.props.book.asin)}
                    style={{ border: this.props.selectedB === this.props.book.asin ? '3px solid yellow' : 'none' }}
                >
                    <Card.Img variant="top" src={this.props.book.img} className='bookCover'/>
                    <Card.Body>
                        <Card.Title className='title' style={{ color: 'black' }}><MyBadge> </MyBadge>{this.props.book.title}</Card.Title>
                    </Card.Body>
                </Card></Col></Row> </Container> 
                {/* {
                    this.state.selected && <CommentArea asin={this.props.book.asin} />
                } */}
            </>
        )
    }

}

export default SingleBook