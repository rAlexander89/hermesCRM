import { connect } from 'react-redux'
import { createComment } from '../../../actions/comment_actions'
import CreateCommentForm from './CreateCommentForm'

const mSTP = ({entities: { users }, session}) => {
    
    return {
        currentUser: users[session.currentUserId],
    }
}

const mDTP = dispatch => {
    
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}

export default connect(mSTP, mDTP)(CreateCommentForm);