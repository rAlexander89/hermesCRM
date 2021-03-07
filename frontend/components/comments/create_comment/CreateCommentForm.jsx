import React, {useRef} from 'react'

function CreateCommentForm({currentUser, property_id, createComment}) {
    const commentForm = useRef(null)

    let user_id = currentUser.id
    let privileges = currentUser.privileges

    const handleClick = e => {
        e.preventDefault()
        
        let formData = commentForm.current

        const comment = {
            comment_txt: formData['comment'].value,
            user_id: user_id,
            property_id: property_id,
            privileges: privileges
        }

        console.log(comment)


        createComment(comment)
            .then(res => console.log(res))
    }

    return (
        <div>
            <form ref={commentForm} onSubmit={handleClick} autoComplete="off">
                   <textarea
                   className='comment-box'
                    placeholder="Comment here..."
                    label={'comment'}
                    name={'comment'}
                    />
                  <button type='submit' className='session-button'> POST </button>
            </form>
        </div>
    )
}

export default CreateCommentForm
