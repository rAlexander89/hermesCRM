import { connect } from 'react-redux';
import LeadIndexItem from './LeadIndexItem'
// import { fetchAgentByLicense } from '../../../actions/agent_actions'

const mSTP = ({entities: {agents}}) => {
    return{
        agent: agents
    }
}

const mDTP = dispatch => {
    return {
        // fetchAgentByLicense: agent_id => dispatch(fetchAgentByLicense(agent_id))
    }
}

export default connect(mSTP, mDTP)(LeadIndexItem);
