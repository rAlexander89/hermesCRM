
export const updatePipeline = pipeline => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/pipeline/${pipeline.id}`,
        data: { pipeline }
    })
};

export const fetchUnassignedProperties = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pipeline/fetch_unassigned_properties'
    })
}

export const fetchContactedProperties = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pipeline/fetch_contacted_properties'
    })
}

export const fetchCounterReceivedProperties = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pipeline/fetch_counter_received_properties'
    })
}

export const fetchCounterRespondedProperties = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pipeline/fetch_counter_responded_properties'
    })
}

export const fetchUnderContractProperties = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pipeline/fetch_under_contracted_properties'
    })
}

export const fetchContingenciesRemovedProperties = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pipeline/fetch_contingencies_removed_properties'
    })
}

export const fetchClosedroperties = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pipeline/fetch_closed_properties'
    })
}