import { connect } from 'react-redux'
import { fetchUser } from '../../../../actions/user_actions'
import ShowPropertyCommentItem from './ShowPropertyCommentItem'

const mSTP = ({entities: {users}}) => {
    return {
        author: Object.values(users)[0]
    }
}

const mDTP = dispatch => {    
    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(ShowPropertyCommentItem);