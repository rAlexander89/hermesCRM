import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER, REMOVE_USER } from '../../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_ALL_USERS:
            return Object.assign({}, state, action.users);
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.userId.id]: action.userId });
        case REMOVE_USER:
            let newState = Object.assign({}, state);
            delete newState[action.userId];
            return newState;
        default:
            return state;
    }
};

export default usersReducer;
