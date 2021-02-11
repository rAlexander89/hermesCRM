import * as PropertyAPIUtil from '../utils/property_api_util'

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES'
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY'
export const REMOVE_PROPERTY = "REMOVE_PROPERTY"
export const RECEIVE_PROPERTY_ERRORS = "RECEIVE_PROPERTY_ERRORS"

export const receiveProperties = properties => {
    return{
        type: RECEIVE_PROPERTIES,
        properties
    }
}

export const receiveProperty = property => {
    return{
        type: RECEIVE_PROPERTY,
        property
    }
}

export const removeProperty = propertyId => {
    return{
        type: REMOVE_PROPERTY,
        propertyId
    }
}

export const receivePropertyErrors = errors => {
    return{
        type: RECEIVE_PROPERTY_ERRORS,
        errors
    }
}

export const fetchProperties = () => dispatch => {
    return PropertyAPIUtil.fetchProperties()
        .then(properties => dispatch(receiveProperties(properties)),
            error => dispatch(receivePropertyErrors(error.responseJSON)))
}

export const fetchProperty = propertyId => dispatch => {
    return PropertyAPIUtil.fetchProperty(propertyId)
        .then(property => dispatch(receiveProperty(property))),
            error => dispatch(receivePropertyErrors(error.responseJSON))
}

export const createProperty = property => dispatch => {
    return PropertyAPIUtil.createProperty(property)
        .then(property => dispatch(receiveProperty(property)),
            error => dispatch(receivePropertyErrors(error.responseJSON)))
}

export const updateProperty = property => dispatch => {
    return PropertyAPIUtil.updateProperty(property)
        .then(property => dispatch(receiveProperty(property)),
            error => dispatch(receivePropertyErrors(error.responseJSON)))
}

export const deleteProperty = propertyId => dispatch => {
    return PropertyAPIUtil.deleteProperty(propertyId)
        .then(() => dispatch(removeProperty(propertyId)),
            error => dispatch(receivePropertyErrors(error.responseJSON)))
}

