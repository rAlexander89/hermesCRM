import { RECIEVE_LEAD } from "../../actions/lead_actions"


const leadsReducer = ( state = {}, action ) => {

    Object.freeze(state)

    switch (action.type){
        case RECIEVE_LEAD:
            return Object.assign({}, state, action.lead)
        default:
            return state
    }

}

export default leadsReducer