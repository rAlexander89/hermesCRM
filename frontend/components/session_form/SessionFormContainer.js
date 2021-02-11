
import SessionForm from './SessionForm'
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom'

const mSTP = state => {
    return{
        // errors: state.errors.session
    }
}

const mDTP = dispatch => {
    return{
        loginUser: user => dispatch(login(user)),
        signupUser: user => dispatch(signup(user))
    }
}

export default withRouter(connect(mSTP, mDTP)(SessionForm))