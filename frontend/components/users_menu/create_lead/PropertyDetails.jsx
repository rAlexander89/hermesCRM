import React from 'react'

function PropertyDetails() {
    return  <div className='lead-create-col'>
                <div className='lead-create-col-header'>
                    <h5>Property Details</h5>
                </div>

                <div className='form-chunk'>
                    <input
                        type='text'
                        className='name-field'
                        placeholder='bed count'
                        label={'bed_count'}
                        name={'bed_count'}/>
                    
                    <input
                        type='text'
                        className='name-field'
                        placeholder='bath count'
                        label={'bath_count'}
                        name={'bath_count'}/>
                    
                    <input
                        type='text'
                        className='name-field'
                        placeholder='gross living area'
                        label={'gla'}
                        name={'gla'}/>
                    
                    <input
                        type='text'
                        className='name-field'
                        placeholder='lot area'
                        label={'lot_area'}
                        name={'lot_area'}/>
                </div>
            </div>
}

export default PropertyDetails
