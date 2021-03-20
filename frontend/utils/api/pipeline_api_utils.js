const UNASSIGNED = 'Unassigned'

export const fetchPipeline = pipeline_status => {
    switch(pipeline_status){
        case UNASSIGNED:
            return fetchUnassignedProperties();
        default:
            return null;

    }
    // return $.ajax({
    //     method: 'GET',
    //     url: `/api/pipeline/${pipeline_status}`
    // })
};

export const updateProperty = property => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/properties/${property.id}`,
        data: { property }
    })
};

export const fetchUnassignedPipeline = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pipeline/fetch_unassigned_properties'
    })
}