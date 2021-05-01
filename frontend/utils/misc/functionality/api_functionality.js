
export const leadExists = lead => {
    return Object.values(lead).length !== 0
}

export function newLeadCycle( lead, setSelectedLead, dispatch, fetchPipeline, selectPipeline ){
    if (leadExists(lead)){
            const showData = {
                property_id: lead.property, 
                agent: lead.agent,
                pipeline: lead.pipeline
            }
            setSelectedLead(showData)
            dispatch(fetchPipeline(selectPipeline))
        }
}

