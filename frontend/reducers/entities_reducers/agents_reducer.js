
import { RECEIVE_AGENT } from '../../actions/agent_actions';

const agentsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_AGENT:
            // return Object.assign({}, state, {action.agent});
            return Object.assign({}, state, action.agent);
        default:
            return state;
    }
};

export default agentsReducer;
