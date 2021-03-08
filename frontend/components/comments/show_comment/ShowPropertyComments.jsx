import React, {useEffect} from 'react'
import ShowPropertyCommentItemContainer from './show_property_comment_item/ShowPropertyCommentItemContainer'

function ShowPropertyComments({fetchPropertyComments, property_id, comments}) {

    useEffect(() => {
        fetchPropertyComments(property_id)
    }, [property_id])


    return (
        <div className='conversation-log'>
            {comments.map((comment) => (
                <ShowPropertyCommentItemContainer
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </div>
    )
}

export default ShowPropertyComments
