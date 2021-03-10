import { connect } from 'react-redux';
import LeadIndexItem from './LeadIndexItem'
import { fetchAgentByListingId } from '../../../actions/agent_actions'

const mSTP = ({entities: {agents}}) => {
    return{
        agent: Object.values(agents)
    }
}

const mDTP = dispatch => {
    return {
        fetchAgentByListingId: listingId => dispatch(fetchAgentByListingId(listingId))
    }
}

export default connect(mSTP, mDTP)(LeadIndexItem);
