const UNASSIGNED = 'Unassigned'

export const updatePipeline = pipeline => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/pipeline/${pipeline.id}`,
        data: { pipeline }
    })
};

export const fetchUnassignedPipeline = () => {
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