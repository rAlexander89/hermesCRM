import React from 'react'
import LeadsShowDetailsContainer from './leads_show_details/LeadsShowDetailsContainer'
import LeadShowContactContainer from './lead_show_contact/LeadShowContactContainer'

function LeadsShowBody({ currentUser, selectedLead, 
    contacted, setContacted,
    listingStatus, setListingStatus,
    pipelineStatus, setPipelineStatus,
    watched, setWatched
}) {
    return (
        <div className='leads-show-body-container'>
            <LeadsShowDetailsContainer 
                contacted={contacted} setContacted={setContacted} 
                property_id={selectedLead.property_id} pipeline={selectedLead.pipeline} 
                currentUser={currentUser}
                listingStatus={listingStatus} setListingStatus={setListingStatus}
                pipelineStatus={pipelineStatus} setPipelineStatus={setPipelineStatus}
                watched={watched} setWatched={setWatched}


            />
            <LeadShowContactContainer agent={selectedLead.agent} property_id={selectedLead.property_id} currentUser={currentUser}/>
        </div>
    )
}

export default LeadsShowBody
