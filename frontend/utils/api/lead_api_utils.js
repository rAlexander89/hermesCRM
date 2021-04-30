
export const createSingleLead = data => {
    debugger
    return $.ajax({
        method: 'POST',
        url: '/api/leads',
        data: data,
    })
}

