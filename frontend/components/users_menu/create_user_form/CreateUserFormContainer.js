
import CreateUserForm from './CreateUserForm'
import { connect } from 'react-redux'
import {createUser} from '../../../actions/user_actions'


const mSTP = (state) => {
    return{
    }
}

const mDTP = dispatch => {
    return{
        createUser: user => dispatch(createUser(user))
    }
}

export default connect(mSTP, mDTP)(CreateUserForm)
