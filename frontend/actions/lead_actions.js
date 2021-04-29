import * as LeadApiUtil from '../utils/api/lead_api_utils'

export const RECIEVE_LEAD = 'RECEIVE_LEAD'

export const receiveLead = lead => {
    return{
        type: RECIEVE_LEAD,
        lead
    }
}

export const createSingleLead = lead_data => dispatch => {
    return LeadApiUtil.createSingleLead(lead_data)
        .then(lead => dispatch(receiveLead(lead)))
}