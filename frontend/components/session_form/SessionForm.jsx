import React, { useState, useRef } from 'react'

const SessionForm = ({loginUser, signupUser}) => {

    // const [form, setForm] = useState({email: '', password: '' })

    const inputForm = useRef(null)


    const handleClick = () => {
        let formData = inputForm.current

        const user = {
            email: formData['email'].value,
            password: formData['password'].value 
        }


        // setForm(form => ({
        //     email: formData['email'].value,
        //     password: formData['password'].value    
        // }))

        debugger



        loginUser(user)
            .then(() => console.log('we are in'))
    }

    return (
        <div className='form-container'>
            <form ref={inputForm} className='session-form'>
                <input
                    type='email'
                    placeholder='email'
                    label={'email'}
                    name={'email'}/>

                <input
                    type='password'
                    placeholder='password'
                    label={'password'}
                    name={'password'}/>
            </form>
                <button onClick={handleClick}>Log In</button>
        </div>
    )
}

export default SessionForm
