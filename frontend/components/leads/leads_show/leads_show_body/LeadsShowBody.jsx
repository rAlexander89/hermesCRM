import React from 'react'
import LeadsShowDetailsContainer from './leads_show_details/LeadsShowDetailsContainer'
import LeadShowContactContainer from './lead_show_contact/LeadShowContactContainer'

function LeadsShowBody({selectedLead, setSelectedLead}) {
    return (
        <div className='leads-show-body-container'>
            {/* property details  */}
            <LeadsShowDetailsContainer selectedLead={selectedLead}/>
            {/* agent contact/log  */}
            <LeadShowContactContainer/>
            
        </div>
    )
}

export default LeadsShowBody
