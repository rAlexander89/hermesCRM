import React, {useRef} from 'react'

function CreateUserForm({createUser}) {
    const newUser = useRef(null)

    const handleClick = (e) => {
        e.preventDefault();

        let formData = newUser.current

        const user = {
            first_name: formData['first-name'].value,
            last_name: formData['last-name'].value,
            password: formData['password'].value,
            email: formData['email'].value,
            privileges: formData['privilege'].value
        }

        createUser(user)
            .then(() => {
                inputForm.current.reset()
                console.log('user created')
                history.push('/dash')
            })
    }


    return(
    <div className='create-user-container'>
            <div className='create-user-container-header'>
                <h5>Create User</h5>
             </div>
            <div className='create-user-container-body'>
                <form ref={newUser} className='create-user-form' autoComplete="off" onSubmit={handleClick}>
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


                    <br/>
                    <h5 id='priority-label'>Privileges</h5> 
                <div className="switch">
                    <div className='group-radio'>
                        <input name="priority_switch" 
                            id="admin" 
                            type="radio"
                            name={'privilege'}
                            value={'admin'} />
                            <label for="admin">Admin</label>

                        <input name="priority_switch" 
                            id="sales_manager"
                            type="radio"
                            name={'privilege'}
                            value={'sales_manager'} />
                            <label for="sales_manager">Sales Manager</label>
                    </div>

                    <div className='group-radio'>
                        <input name="priority_switch" 
                            id="agent_lead"
                            type="radio"
                            name={'privilege'}
                            value={'agent_lead'} />
                            <label for="agent_lead">Agent Lead</label>

                        <input name="priority_switch" 
                            id="agent" 
                            type="radio"
                            name={'privilege'}
                            value={'agent'}  />
                            <label for="agent">Agent</label>
                    </div>
                </div>

                    </div>
 
                    <button type='submit' className='session-button'> CREATE </button>
                </form>
            </div>
        </div>
    )
}

export default CreateUserForm
