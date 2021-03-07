import { connect } from 'react-redux'
import { fetchPropertyComments } from '../../../actions/comment_actions'
import ShowPropertyComments from './ShowPropertyComments'

const mSTP = ({entities: {comments}}) => {
    return {
        comments: Object.values(comments)
    }
}

const mDTP = dispatch => {    
    return {
        fetchPropertyComments: propertyId => dispatch(fetchPropertyComments(propertyId))
    }
}

export default connect(mSTP, mDTP)(ShowPropertyComments);