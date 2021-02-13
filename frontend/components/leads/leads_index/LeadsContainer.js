import { connect } from 'react-redux';
import { fetchProperties } from '../../../actions/property_actions'
import Leads from './Leads'

const mSTP = state => {
    return{
        currentUser: state.entities.users[state.entities.session.currentUserId],
        leads: Object.values(state.entities.properties)
    }
}

const mDTP = dispatch => {
    return {
        fetchProperties: () => dispatch(fetchProperties())
    }
}

export default connect(mSTP, mDTP)(Leads);
