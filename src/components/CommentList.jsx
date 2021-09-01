  
import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow }) => (
    <ListGroup className='mb-5 mt-2' style={{ color: 'black' }}>
        {
            commentsToShow.map(comment => (
                <SingleComment comment={comment} key={comment._id} />
            ))
        }
    </ListGroup>
)

export default CommentList