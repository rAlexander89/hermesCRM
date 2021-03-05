import React, {useRef} from 'react'
import {createUser} from '../../../actions/user_actions'

function CreateUserForm() {
    const newUser = useRef(null)

    const handleClick = (e) => {
        e.preventDefault();

        let formData = inputForm.current

        const user = {
            first_name: formData['first-name'].value,
            last_name: formData['last-name'].value,
            password: formData['password'].value,
            email: formData['email'].value,
            privileges: formData['email'].value
        }

        createUser(user)
            .then(() => {
                inputForm.current.reset()
                console.log('user created')
                history.push('/dash')
            })
    }


    return (
    <div className='create-user-container'>
            <div className='create-user-container-header'>
                <h5>Create User</h5>
             </div>
                <div className='create-user-container-body'>
                <form ref={newUser} className='session-form' autoComplete="off" onSubmit={handleClick}>
                    <input
                        type='text'
                        className='name-field'
                        placeholder='first name'
                        label={'first-name'}
                        name={'first-name'}/>
                    <input
                        type='text'
                        className='name-field'
                        placeholder='last name'
                        label={'last-name'}
                        name={'last-name'}/>
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
                    <input
                        type='password'
                        className='password-field'
                        placeholder='password confirm'
                        label={'password'}
                        name={'password2'}/>
                    <div>
            </div>

            <div className="switch">
                <h5 id='priority-label'>Privileges:</h5>
                <div className='group-radio'>
                    <input name="priority_switch" 
                        className='select-radio'
                        id="low_form" 
                        type="radio"
                        name={'admin'}
                        value={1} />
                        <label for="low_form">Admin</label>

                    <input name="priority_switch" 
                        className='select-radio'
                        id="medium_form"
                        type="radio"
                        name={'admin'}
                        value={2} />
                        <label for="medium_form">Sales Manager</label>
                </div>

                <div className='group-radio'>
                    <input name="priority_switch" 
                        className='select-radio'
                        id="medium_form"
                        type="radio"
                        value={2} />
                        <label for="medium_form">Agent Lead</label>

                    <input name="priority_switch" 
                        className='select-radio'
                        id="high_form" 
                        type="radio"
                        value={3}  />
                        <label for="high_form">Agent</label>
                </div>
            </div>
                    <button type='submit' className='session-button'> CREATE </button>
                </form>
            </div>
        </div>
    )
}

export default CreateUserForm
