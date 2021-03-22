import React from 'react'
import LeadsShowBodyContainer from './leads_show_body/LeadsShowBodyContainer'



function LeadShow({selectedLead, contacted, setContacted}) {
    
    const leadData = (selectedLead) => {
        if (selectedLead){
            document.querySelector('.lead-show-container').classList.add('show');
            return(
                    <LeadsShowBodyContainer contacted={contacted} setContacted={setContacted} selectedLead={selectedLead}/>
            )
        } else {
            return null
        }
    }

    return (
        <div className='lead-show-container'>
            {leadData(selectedLead)}
        </div>
    )

}

export default LeadShow
