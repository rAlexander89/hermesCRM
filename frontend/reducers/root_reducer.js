import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducers/entities_reducer'
import sessionReducer from './session_reducer'
import uiReducer from './ui/ui_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    ui: uiReducer

});

export default rootReducer;
