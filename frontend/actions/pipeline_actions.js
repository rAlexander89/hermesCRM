import * as PipelineAPIUtils from '../utils/api/pipeline_api_utils'


export const RECEIVE_PIPELINE = 'RECEIVE_PIPELINE'

const UNASSIGNED = 'Unassigned'
const CONTACTED = 'Contacted'


export const receivePipeline = pipeline => {
    return{
        type: RECEIVE_PIPELINE,
        pipeline
    }
}

export const fetchPipeline = pipeline_status => dispatch => {
    switch(pipeline_status){
        case(UNASSIGNED):
            return PipelineAPIUtils.fetchUnassignedPipeline()
            .then(pipeline => dispatch(receivePipeline(pipeline)));
        case(CONTACTED):
            return PipelineAPIUtils.fetchContactedProperties()
            .then(pipeline => dispatch(receivePipeline(pipeline)));
        default:
            return null;
    }
}