import { connect } from 'react-redux'
import { logout } from '../../../../actions/session_actions'
import MenuItems from './MenuItems'

const mSTP = state => {
    return{
        currentUser: state.entities.users[state.entities.session.currentUserId]
    }
}

const mDTP = dispatch => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(MenuItems)