import * as PipelineAPIUtil from '../utils/api/pipeline_api_utils'

export const RECEIVE_PIPELINE = 'RECEIVE_PIPELINE'

export const receivePipeline = pipeline => {
    return{
        type: RECEIVE_PIPELINE,
        pipeline
    }
}

export const fetchPipeline = pipeline_status => {
    return PipelineAPIUtil.fetchPipeline(pipeline_status)
    .then(pipeline => dispatch(receivePipeline(pipeline)))
}

export const fetchUnassignedPipeline = () => dispatch => {
    return PipelineAPIUtil.fetchUnassignedPipeline()
    .then(pipeline => dispatch(receivePipeline(pipeline)))
}