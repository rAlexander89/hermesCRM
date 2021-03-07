import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import propertiesReducer from './properties_reducer'
import commentsReducer from './comments_reducer'
import sessionReducer from './session_reducer'


export default combineReducers({
    users: usersReducer,
    properties: propertiesReducer,
    comments: commentsReducer,
    session: sessionReducer

});
