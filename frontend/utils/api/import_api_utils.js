export const importProperties = csv => {
    return $.ajax({
        method: 'POST',
        url: '/api/csv/import',
        data: csv,
        contentType: false,
        processData: false
    })
}