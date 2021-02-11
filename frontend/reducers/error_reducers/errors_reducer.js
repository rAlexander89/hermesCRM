import { combineReducers } from 'redux'

import usersErrorsReducer from './user_errors_reducer'
import sessionErrorsReducer from './session_errors_reducer'

export default combineReducers({
    users: usersErrorsReducer,
    sessions: sessionErrorsReducer
})