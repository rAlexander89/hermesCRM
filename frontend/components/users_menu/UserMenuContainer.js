
import UsersMenu from './UsersMenu'
import { connect } from 'react-redux'

const mSTP = ( {entities: {users}} ) => {
    return{
        users
    }
}

const mDTP = dispatch => {
    return{
    }
}

export default connect(mSTP, mDTP)(UsersMenu)
