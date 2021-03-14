export const fetchProperties = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/properties/'
    })
};

export const fetchProperty = propertyId => {
    return $.ajax({
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

export const importProperties = csv => {
    return $.ajax({
        method: 'POST',
        url: '/api/properties/import',
        data: csv,
        contentType: false,
        processData: false
    })
}

export const updateProperty = property => {
    debugger
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
