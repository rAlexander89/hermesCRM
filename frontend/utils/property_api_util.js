export const fetchProperties = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pins/'
    })
};

export const fetchProperty = propertyId => {
    return $.ajax({
        // url: `/api/properties/${pinId.author_id}/boards/${pinId.board_id}/pins/${pinId.pin_id}`,
        url: `/api/properties/${propertyId}`,
        method: 'GET'
    })
};

export const createProperty = property => {
    return $.ajax({
        method: 'POST',
        url: '/api/properties',
        data: property,
        contentType: false,
        processData: false
    })
};

export const updateProperty = property => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/properties/${property.id}`,
        data: { property }
    })
};

export const deleteProperty = propertyId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/properties/${propertyId}`
    })
};
