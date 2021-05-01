import React, { useRef } from 'react'
import { useDispatch,  } from 'react-redux'
import ImportLeads from '../../leads/leads_manager/ImportLeads'
import { closeButton } from '../../misc/svgs'
import CreateAgent from './CreateAgent'
import CreateListingDetails from './CreateListingDetails'
import CreateProperty from './CreateProperty'
import PropertyDetails from './PropertyDetails'
import { prepNewLead } from '../../../utils/misc/formatting/formatting'
import { createSingleLead } from '../../../actions/lead_actions'

function CreateListing() {


    const newUser = useRef(null)
    const dispatch = useDispatch()


    const handleClick = (e) => {
        e.preventDefault();

        let formData = newUser.current
        let newLead = prepNewLead(formData)

        dispatch(createSingleLead(newLead))
    }
    
    return  <div className='create-lead-container'>
                {closeButton()}
                <div className='create-lead-container-header'>
                    <h5>Create New Listings </h5>
                </div>
                <ImportLeads/>
                    <div className='lead-individual-create'>
                        <h3>Create individual lead</h3>
                    </div>
                <div className='create-lead-container-body'>
                    <form ref={newUser} className='create-lead-form' autoComplete="off" onSubmit={handleClick}>
                        <div className='form-lead-top'>
                            <CreateAgent/>
                            <CreateProperty/>
                            <CreateListingDetails/>
                            <PropertyDetails/>
                        </div>
                        <button type='submit' className='session-button'> CREATE </button>
                    </form>
                </div>
            </div>
}

export default CreateListing
