import { Badge} from 'react-bootstrap'

const MyBadge = ({color, title}) => {
    return(
<Badge variant={color}>{title}</Badge>
    )
}

export default MyBadge