import { RECEIVE_PIPELINE } from '../../actions/pipeline_actions'

const pipelineReducer = (state = {}, action) => {
    Object.freeze(state)

    switch(action.type){
        case RECEIVE_PIPELINE:
            return action.pipeline;
        default:
            return state;
    }
}

export default pipelineReducer