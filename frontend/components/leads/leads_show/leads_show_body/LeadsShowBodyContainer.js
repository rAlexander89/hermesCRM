import { connect } from 'react-redux';
import LeadsShowBody from './LeadsShowBody'

const mSTP = ({entities: {users}, session}) => {

    return{
        currentUser: users[session.currentUserId]
    }
}

const mDTP = dispatch => {
    return {
    }
}

export default connect(mSTP, mDTP)(LeadsShowBody);
