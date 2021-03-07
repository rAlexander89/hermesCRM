import React from 'react'
import LeadsShowDetailsContainer from './leads_show_details/LeadsShowDetailsContainer'
import LeadShowContactContainer from './lead_show_contact/LeadShowContactContainer'

function LeadsShowBody({property, currentUser, selectedLead}) {
    return (
        <div className='leads-show-body-container'>
            {/* property details  */}
            <LeadsShowDetailsContainer selectedLead={selectedLead} currentUser={currentUser}/>
            {/* agent contact/log  */}
            <LeadShowContactContainer property_id={selectedLead.id} currentUser={currentUser}/>
            
        </div>
    )
}

export default LeadsShowBody
