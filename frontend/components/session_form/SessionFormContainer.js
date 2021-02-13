
import SessionForm from './SessionForm'
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom'

const mSTP = state => {
    return{
    }
}

const mDTP = dispatch => {
    return{
        loginUser: user => dispatch(login(user)),
    }
}

export default withRouter(connect(mSTP, mDTP)(SessionForm))