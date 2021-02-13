import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions'

import Greeting from './Greeting';

const mSTP = state => {
    return{
        currentUser: state.entities.users[state.entities.session.currentUserId],
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(mSTP, mDTP)(Greeting);
