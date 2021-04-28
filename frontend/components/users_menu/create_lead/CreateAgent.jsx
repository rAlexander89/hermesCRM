import React from 'react'

function CreateAgent() {
    return <div className='lead-create-col'>

                <div className='lead-create-col-header'>
                    <h5>Listing Agent</h5>
                </div>

                <input
                    type='text'
                    className='name-field'
                    placeholder='first name'
                    label={'agent_first'}
                    name={'agent_first'}/>

                <input
                    type='text'
                    className='name-field'
                    placeholder='last name'
                    label={'agent_last'}
                    name={'agent_last'}/>

                <input
                    type='email'
                    className='email-field'
                    placeholder='email'
                    label={'agent_email'}
                    name={'agent_email'}/>

                <input
                    type='number'
                    className='password-field'
                    placeholder='phone number'
                    label={'agent_contact'}
                    name={'agent_contact'}/>

                <input
                    type='text'
                    className='password-field'
                    placeholder='agent id'
                    label={'agent_id'}
                    name={'agent_id'}/>

                <input
                    type='text'
                    className='password-field'
                    placeholder='broker office name'
                    label={'agent_broker_name'}
                    name={'agent_broker_name'}/>

                <input
                    type='text'
                    className='password-field'
                    placeholder='broker id'
                    label={'agent_broker_id'}
                    name={'agent_broker_id'}/>
                    
            </div>
}

export default CreateAgent
