import * as AgentApiUtil from '../utils/agent_api_utils'

export const RECEIVE_AGENT = 'RECEIVE_AGENT'

export const receiveAgent = agent => {
    return{
        type: RECEIVE_AGENT,
        agent
    }
}


export const fetchAgentByListingId = listingId => dispatch => {
    return AgentApiUtil.fetchAgentByListingId(listingId)
        .then(agent => dispatch(receiveAgent(agent)))
}