import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../../../actions/user_actions'

function ShowPropertyCommentItem({comment}) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser(comment.user_id))
    }, [comment])
    
    const author = useSelector(state => Object.values(state.entities.users)[0])
    
    return <div className='convo-item'>
                <h3 className='convo-author'>
                    {author.first_name} {author.last_name}: 
                </h3>
                <div className='convo-text'>
                    {comment.comment_txt}
                </div>
            </div>
}

export default ShowPropertyCommentItem
