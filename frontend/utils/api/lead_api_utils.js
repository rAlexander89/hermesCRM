
export const createSingleLead = data => {
    return $.ajax({
        method: 'POST',
        url: '/api/leads',
        data: data,
    })
}

