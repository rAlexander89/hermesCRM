import React, { useContext } from 'react'
import LeadsShowBody from './leads_show_body/LeadsShowBody'
import { LeadsPipelineContext } from '../../dashboard/Dashboard'



function LeadShow(){

    let ctx = useContext(LeadsPipelineContext)

    const leadData = (selectedLead) => {
        if (selectedLead){
            document.querySelector('.lead-show-container').classList.add('show');
            return <LeadsShowBody/>
        } else { return null }
    }

    return (
        <div className='lead-show-container'>
            {leadData(ctx.selectedLead)}
        </div>
    )

}

export default LeadShow
