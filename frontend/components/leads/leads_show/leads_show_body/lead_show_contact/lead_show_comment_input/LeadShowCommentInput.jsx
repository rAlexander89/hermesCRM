import React, {useRef} from 'react'

function LeadShowCommentInput() {

    const commentForm = useRef(null)

    const handleClick = () => {
        let formData = commentForm.current
        debugger
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
            </form>
                <div type='submit' onClick={handleClick}> Post </div>
        </div>
    )
}

export default LeadShowCommentInput
