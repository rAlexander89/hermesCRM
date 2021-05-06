export const fetchAgentByListingId = listing_id => {
    return $.ajax({
        method: 'GET',
        url: '/api/agents/find_by_listing_id',
        data: {listing_id}
    })
};


export const fetchAgentByLicense = agent_id => {
    return $.ajax({
        method: 'GET',
        url: '/api/agents/fetch_agent_by_agent_license',
        data: {agent_id}
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