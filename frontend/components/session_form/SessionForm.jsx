import React, { useState, useRef, useEffect } from 'react'

const SessionForm = ({loginUser, signupUser}) => {

    const [form, setForm] = useState({email: '', password: '' })
    const [toggle, setTogle] = useState()

    const inputForm = useRef(null)


    const handleClick = () => {
        let formData = inputForm.current

        setForm({...form,
            email: formData['email'].value,
            password: formData['password'].value    
        })

    }
    return (
        <div className='form-container'>
            <form ref={inputForm} className='session-form'>
                <input
                    type='email'
                    placeholder='email'
                    label={'email'}
                    name={'name'}/>

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
