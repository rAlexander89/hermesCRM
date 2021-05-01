import React, { useRef, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { createComment } from '../../../actions/comment_actions'
import { LeadsPipelineContext } from '../../dashboard/Dashboard'

function CreateCommentForm() {

    let ctx = useContext(LeadsPipelineContext)

    const dispatch = useDispatch()

    const commentForm = useRef(null)

    let user_id = ctx.currentUser.id
    let privileges = ctx.currentUser.privileges
    let property_id = ctx.selectedLead.property_id

    const handleClick = e => {
        e.preventDefault()
        
        let formData = commentForm.current

        const comment = {
            comment_txt: formData['comment'].value,
            user_id: user_id,
            property_id: property_id,
            privileges: privileges
        }

        dispatch(createComment(comment))
            .then(() => e.target.reset())
    }

    return <form className='comment-form' ref={commentForm} onSubmit={handleClick} autoComplete="off">
                <textarea
                    className='comment-box'
                    placeholder="Comment here..."
                    label={'comment'}
                    name={'comment'}
                />
                <button type='submit' className='comment-button'> + </button>
            </form>
}

export default CreateCommentForm
