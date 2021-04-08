import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions'

import Greeting from './Greeting';

const mSTP = ({entities: { users }, session}) => {
    
    return {
        currentUser: users[session.currentUserId],
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(mSTP, mDTP)(Greeting);
