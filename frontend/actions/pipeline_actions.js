import * as PipelineAPIUtils from '../utils/api/pipeline_api_utils'


export const RECEIVE_PIPELINE = 'RECEIVE_PIPELINE'
export const RECEIVE_PIPELINE_BY_ID = 'RECEIVE_PIPELINE_BY_ID'

const UNCONTACTED = 'Uncontacted'
const CONTACTED = 'Contacted'
const WATCHED = 'Watched'
const COUNTER_RECEIVED = 'Counter Received'
const COUNTER_RESPONDED = 'Counter Responded'
const UNDER_CONTRACT = 'Under Contract'
const CONTINGENCIES_REMOVED ='Contingencies Removed'
const CLOSED = 'Closed'


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

export const fetchPipeline = pipeline_status => dispatch => {
    debugger
    switch(pipeline_status){
        case(UNCONTACTED):
            return PipelineAPIUtils.fetchUncontactedProperties()
            .then(pipeline => dispatch(receivePipeline(pipeline)));
        case(CONTACTED):
            return PipelineAPIUtils.fetchContactedProperties()
            .then(pipeline => dispatch(receivePipeline(pipeline)));
        case(WATCHED):
            return PipelineAPIUtils.fetchWatchedProperties()
            .then(pipeline => dispatch(receivePipeline(pipeline)));
        case(COUNTER_RECEIVED):
            return PipelineAPIUtils.fetchCounterReceivedProperties()
            .then(pipeline => dispatch(receivePipeline(pipeline)));
        case(COUNTER_RESPONDED):
            return PipelineAPIUtils.fetchCounterRespondedProperties()
            .then(pipeline => dispatch(receivePipeline(pipeline)));
        case(UNDER_CONTRACT):
            return PipelineAPIUtils.fetchUnderContractProperties()
            .then(pipeline => dispatch(receivePipeline(pipeline)));
        case(CONTINGENCIES_REMOVED):
            return PipelineAPIUtils.fetchContingenciesRemovedProperties()
            .then(pipeline => dispatch(receivePipeline(pipeline)));
        case(CLOSED):
            return PipelineAPIUtils.fetchClosedroperties()
            .then(pipeline => dispatch(receivePipeline(pipeline)));
        default:
            return null;
    }
}