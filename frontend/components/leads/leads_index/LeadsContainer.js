import { connect } from 'react-redux'
import { fetchPipeline } from '../../../actions/pipeline_actions'
import Leads from './Leads'

const mSTP = ({entities: { users, session, pipeline }}) => {
    // let list;
    
    // Object.values(pipeline).length !== 0 ? 
        // list = Object.values(pipeline).reverse() 
        // :
        // list = false

    return{
        // currentUser: users[session.currentUserId],
        // pipeline: list
    }
}

const mDTP = dispatch => {

    return{
        // fetchPipeline: pipeline_status => dispatch(fetchPipeline(pipeline_status))
    }
}

export default connect(mSTP, mDTP)(Leads);
