import React, {useRef} from 'react'

function LeadShowCommentInput() {

    const commentForm = useRef(null)

    const handleClick = () => {
        let formData = commentForm.current
        console.log('hi')

    }


    return (
        <div>
            <form ref={commentForm} autoComplete="off">
                   <textarea
                   className='comment-box'
                    placeholder="Comment here..."
                    label={'comment'}
                    name={'comment'}
                    />
                <div type='submit' onClick={handleClick}> Post </div>
            </form>
        </div>
    )
}

export default LeadShowCommentInput
