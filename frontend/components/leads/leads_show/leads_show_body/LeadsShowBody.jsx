import React from 'react'
import LeadsShowDetails from './leads_show_details/LeadsShowDetails'
import LeadShowContact from './lead_show_contact/LeadShowContact'

function LeadsShowBody(){
    
    return (
        <div className='leads-show-body-container'>
            <LeadsShowDetails/>
            <LeadShowContact/>
        </div>
    )
}

export default LeadsShowBody
