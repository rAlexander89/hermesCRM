import {
    RECEIVE_PROPERTY,
    RECEIVE_PROPERTIES,
    RECEIVE_UNCONTACTED_PROPERTIES,
    REMOVE_PROPERTY
} from '../../actions/property_actions'

const propertiesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_PROPERTIES:
            return Object.assign({}, state, action.properties)
        case RECEIVE_UNCONTACTED_PROPERTIES:
            return Object.assign({}, state, {uncontactedProperties: action.properties})
        case RECEIVE_PROPERTY:
            let { property } = action.property
            return Object.assign({}, state, { property: property })
        case REMOVE_PROPERTY:
            let newState = Object.assign({}, state);
            delete newState[action.propertyId];
            return newState;
        default:
            return state;
    }
}


export default propertiesReducer;