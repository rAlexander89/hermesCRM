import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'

const SessionForm = ({loginUser}) => {

    const inputForm = useRef(null)
    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault()
        let formData = inputForm.current

        const user = {
            email: formData['email'].value,
            password: formData['password'].value 
        }

        loginUser(user)
            .then(() => {
                inputForm.current.reset()
                history.push('/dash')
                console.log('we are in')
            })
    }

    return (
        <div className='session-form-container'>
            <div className='session-form-header'>
                <h1>Flipping Unleashed</h1>
            </div>
            <form ref={inputForm} className='session-form' autoComplete="off">
                <input
                    type='email'
                    className='email-field'
                    placeholder='email'
                    label={'email'}
                    name={'email'}/>

                <input
                    type='password'
                    className='password-field'
                    placeholder='password'
                    label={'password'}
                    name={'password'}/>
            </form>
                <div type='submit' className='session-button' onClick={handleClick}> LOG IN </div>
        </div>
    )
}

export default SessionForm
