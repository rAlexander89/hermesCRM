import React from 'react'
import LeadsShowDetailsContainer from './leads_show_details/LeadsShowDetailsContainer'
import LeadShowContactContainer from './lead_show_contact/LeadShowContactContainer'

function LeadsShowBody({ currentUser, selectedLead, contacted, setContacted }) {
    return (
        <div className='leads-show-body-container'>
            {/* property details  */}
            <LeadsShowDetailsContainer contacted={contacted} setContacted={setContacted} property_id={selectedLead.property_id} pipeline={selectedLead.pipeline} currentUser={currentUser}/>
            {/* agent contact/log  */}
            <LeadShowContactContainer agent={selectedLead.agent} property_id={selectedLead.property_id} currentUser={currentUser}/>
        </div>
    )
}

export default LeadsShowBody
