
import { RECEIVE_AGENT} from '../../actions/agent_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_AGENT:
            return Object.assign({}, state, { [agent]: action.agent });
        default:
            return state;
    }
};

export default usersReducer;
