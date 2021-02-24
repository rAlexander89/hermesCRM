import React, {useRef} from 'react'

function LeadShowCommentInput() {

    const commentRef = useRef(null)


    return (
        <div>
            <form ref={commentRef} autoComplete="off">
                   <textarea
                   className='comment-box'
                    placeholder="Comment here..."
                    />
            </form>
                <div type='submit'> Post </div>
        </div>
    )
}

export default LeadShowCommentInput
