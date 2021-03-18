import { connect } from 'react-redux'
import { fetchProperties, fetchUnassignedProperties } from '../../../actions/property_actions'
import { sortLeads } from '../../../utils/misc/sorting/sorting'
import Leads from './Leads'

const mSTP = ({entities: { users, session, properties }}) => {
    let unsorted;
    
    // properties.unassignedProperties !== undefined ? 
    //     unassignedProperties = Object.values(properties.unassignedProperties).reverse() 
    //     :
    //     unassignedProperties = false

    properties !== undefined ? 
        unsorted = Object.values(properties).reverse() 
        :
        unsorted = false
        
    return{
        currentUser: users[session.currentUserId],
        sorted: sortLeads(unsorted)
    }
}

const mDTP = dispatch => {
    return{
        fetchProperties: () => dispatch(fetchProperties()),
        fetchUnassignedProperties: () => dispatch(fetchUnassignedProperties())
    }
}

export default connect(mSTP, mDTP)(Leads);
