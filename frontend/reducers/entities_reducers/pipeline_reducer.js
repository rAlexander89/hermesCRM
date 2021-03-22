import { RECEIVE_PIPELINE } from '../../actions/pipeline_actions'

const pipelineReducer = (state = {}, action) => {
    Object.freeze(state)
    const empty = {}

    switch(action.type){
        case RECEIVE_PIPELINE:
            return action.pipeline || empty;
        default:
            return state;
    }
}

export default pipelineReducer