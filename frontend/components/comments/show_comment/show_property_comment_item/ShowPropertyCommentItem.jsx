import React, {useEffect} from 'react'

function ShowPropertyCommentItem({author, fetchUser, comment}) {
    
    useEffect(() => {
        fetchUser(comment.user_id)
    }, [comment])


    return (
        <div className='convo-item'>
            <div className='convo-author'>
                {author.first_name} {author.last_name}: 
            </div>
            <div className='convo-text'>
                {comment.comment_txt}
            </div>
        </div>
    )
}

export default ShowPropertyCommentItem
