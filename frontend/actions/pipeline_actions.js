import * as PipelineAPIUtils from '../utils/api/pipeline_api_utils'


export const RECEIVE_PIPELINE = 'RECEIVE_PIPELINE'
export const RECEIVE_PIPELINE_BY_ID = 'RECEIVE_PIPELINE_BY_ID'


export const receivePipeline = pipeline => {
    return{
        type: RECEIVE_PIPELINE,
        pipeline
    }
}

export const receivePipelineById = pipeline => {
    return{
        type: RECEIVE_PIPELINE_BY_ID,
        pipeline
    }
}

export const fetchPipelineById = pipelineId => dispatch => {
    return PipelineAPIUtils.fetchPipelineById(pipelineId)
        .then(pipeline => dispatch(receivePipelineById(pipeline)))
}

export const fetchPipeline = pipelineStatus => dispatch => {
    return PipelineAPIUtils.fetchPipeline(pipelineStatus)
        .then(pipeline => dispatch(receivePipeline(pipeline)))
}
