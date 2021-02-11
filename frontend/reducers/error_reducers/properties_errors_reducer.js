import { RECEIVE_PROPERTY_ERRORS } from '../../actions/property_actions';
import { CLEAR_ERRORS } from '../../actions/session_actions';

const propertyErrorsReducer = (state = [], action) => {

    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_PROPERTY_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default propertyErrorsReducer;