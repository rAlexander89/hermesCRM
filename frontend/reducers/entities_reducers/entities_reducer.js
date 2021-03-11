import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import propertiesReducer from './properties_reducer'
import commentsReducer from './comments_reducer'
import sessionReducer from './session_reducer'
import agentsReducer from './agents_reducer'

export default combineReducers({
    users: usersReducer,
    agents: agentsReducer,
    properties: propertiesReducer,
    comments: commentsReducer,
    session: sessionReducer
});
