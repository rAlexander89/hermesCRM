import { connect } from 'react-redux'
import { fetchUnassignedPipeline } from '../../../actions/pipeline_actions'
import Leads from './Leads'

const mSTP = ({entities: { users, session, pipeline }}) => {
    let properties;
    
    Object.values(pipeline).length !== 0 ? 
        properties = Object.values(pipeline).reverse() 
        :
        properties = false
        
    return{
        currentUser: users[session.currentUserId],
        pipeline: properties
    }
}

const mDTP = dispatch => {
    return{
        fetchUnassignedPipeline: pipeline_status => dispatch(fetchUnassignedPipeline(pipeline_status))
    }
}

export default connect(mSTP, mDTP)(Leads);
