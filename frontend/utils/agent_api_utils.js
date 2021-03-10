export const fetchAgentByListingId = listing_id => {
    return $.ajax({
        method: 'GET',
        url: '/api/agents/find_by_listing_id',
        data: {listing_id}
    })
};

export const fetchUsers = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/users'
    })
}

export const createUser = user => {
    return $.ajax({
        method: 'POST',
        url: 'api/users',
        data: {user}
    })
}

export const deleteUser = userId => {
    return $.ajax({
        method: 'POST',
        url: 'api/users',
        data: userId
    })
}