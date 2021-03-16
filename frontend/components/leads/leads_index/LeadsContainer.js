import { connect } from 'react-redux';
import { fetchProperties, fetchUnassignedProperties } from '../../../actions/property_actions'
import Leads from './Leads'

const mSTP = ({entities: {users, session, properties }}) => {
    let unassignedProperties;
    
    properties.unassignedProperties !== undefined ? 
        unassignedProperties = Object.values(properties.unassignedProperties).reverse() 
        :
        unassignedProperties = false
        
        
    return{
        currentUser: users[session.currentUserId],
        unassignedProperties: unassignedProperties
    }
}

const mDTP = dispatch => {
    return {
        fetchProperties: () => dispatch(fetchProperties()),
        fetchUnassignedProperties: () => dispatch(fetchUnassignedProperties())
    }
}

export default connect(mSTP, mDTP)(Leads);
