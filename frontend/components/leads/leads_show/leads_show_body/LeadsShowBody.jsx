import React from 'react'
import LeadsShowDetailsContainer from './leads_show_details/LeadsShowDetailsContainer'
import LeadShowContactContainer from './lead_show_contact/LeadShowContactContainer'

function LeadsShowBody() {
    return (
        <div className='leads-show-body-container'>
            <LeadsShowDetailsContainer/>
            <LeadShowContactContainer/>
            
        </div>
    )
}

export default LeadsShowBody
