import React from 'react'

function CreateProperty() {
    return <div className='lead-create-col'>
                <div className='lead-create-col-header'>
                    <h5>Property Address</h5>
                </div>
                <input
                    type='number'
                    className='name-field'
                    placeholder='house number'
                    label={'house_number'}
                    name={'house_number'}/>
                <input
                    type='text'
                    className='name-field'
                    placeholder='street prefix'
                    label={'st_prefix'}
                    name={'st_prefix'}/>
                <input
                    type='text'
                    className='name-field'
                    placeholder='street name'
                    label={'street_name'}
                    name={'street_name'}/>
                <input
                    type='text'
                    className='name-field'
                    placeholder='street suffix'
                    label={'st_suffix'}
                    name={'st_suffix'}/>
                <input
                    type='text'
                    className='email-field'
                    placeholder='city'
                    label={'city'}
                    name={'city'}/>
                <input
                    type='text'
                    className='name-field'
                    placeholder='county'
                    label={'county'}
                    name={'county'}/>
                <input
                    type='text'
                    className='name-field'
                    placeholder='state (abbv)'
                    label={'state'}
                    name={'state'}/>
                <input
                    type='number'
                    className='password-field'
                    placeholder='zipcode'
                    label={'zipcode'}
                    name={'zipcode'}/>
            </div>
}

export default CreateProperty
