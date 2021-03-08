import React, {useEffect} from 'react'

function ShowPropertyComments({fetchPropertyComments, property_id, comments}) {

    useEffect(() => {
        fetchPropertyComments(property_id)
    }, [property_id])

    debugger



    return (
        <div>
            hi
            {comments.map((comment, i) => (
                comment.comment_txt
            ))}
        </div>
    )
}

export default ShowPropertyComments
