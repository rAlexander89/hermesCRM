import React, { useState } from 'react'

function CreateListingDetails() {
    const [ status, setStatus ] = useState('Active')


    function updateStatus(e){
        e.preventDefault()
        let newStatus = e.target.value
        setStatus(newStatus)
    }

    return  <div className='lead-create-col'>
                <div className='lead-create-col-header'>
                    <h5>Listing Details</h5>
                </div>

                <div className='form-chunk'>
                  <select className='listing-status-select' name={'status'} value={status} onChange={updateStatus}>
                        <option value='Coming Soon'>Coming Soon</option>
                        <option value='Active'>Active</option>
                        <option value='Under Contract'>Under Contract</option>
                        <option value='Pending'>Pending</option>
                        <option value='Hold'>Hold</option>
                        <option value='Closed'>Closed</option>
                    </select>       
                </div>

                <div className='form-chunk'>
                    <input
                        type='text'
                        className='name-field'
                        placeholder='list price'
                        label={'list_price'}
                        name={'list_price'}/>

                    <input
                        type='text'
                        className='name-field'
                        placeholder='estimated arv'
                        label={'arv'}
                        name={'arv'}/>

                    <input
                        type='text'
                        className='name-field'
                        placeholder='offer amount'
                        label={'offer'}
                        name={'offer'}/>
                </div>

                <div className='form-chunk'>

                    <input
                        type='text'
                        className='name-field'
                        placeholder='apn'
                        label={'apn'}
                        name={'apn'}/>
                    
                    <input
                        type='text'
                        className='name-field'
                        placeholder='bac - do not use %. Just use X.XX'
                        label={'bac'}
                        name={'bac'}/>
                    
                    <input
                        type='text'
                        className='name-field'
                        placeholder='listing id'
                        label={'listing_id'}
                        name={'listing_id'}/>
                </div> 
            </div>
}

export default CreateListingDetails
