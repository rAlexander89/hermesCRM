import React, {useEffect, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPropertyComments } from '../../../actions/comment_actions'
import ShowPropertyCommentItem from './show_property_comment_item/ShowPropertyCommentItem'
import { LeadsPipelineContext } from '../../dashboard/Dashboard'

function ShowPropertyComments() {
    
    let ctx = useContext(LeadsPipelineContext)
    let property_id = ctx.selectedLead.property_id

    const comments = Object.values(useSelector(state => state.entities.comments))
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPropertyComments(property_id))
    }, [property_id])


    return (
        <div className='conversation-log'>
            {comments.map((comment) => (
                <ShowPropertyCommentItem
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </div>
    )
}

export default ShowPropertyComments
