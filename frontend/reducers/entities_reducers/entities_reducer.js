import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import propertiesReducer from './properties_reducer'
import commentsReducer from './comments_reducer'
import agentsReducer from './agents_reducer'
import pipelineReducer from './pipeline_reducer'
import leadsReducer from './leads_reducer';

export default combineReducers({
    users: usersReducer,
    agents: agentsReducer,
    leads: leadsReducer,
    properties: propertiesReducer,
    pipeline: pipelineReducer,
    comments: commentsReducer
});
