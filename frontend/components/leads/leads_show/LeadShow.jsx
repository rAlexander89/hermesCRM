import React, {useEffect} from 'react'
import LeadsShowHeaderContainer from './leads_show_header/LeadsShowHeaderContainer'
import LeadsShowBodyContainer from './leads_show_body/LeadsShowBodyContainer'



function LeadShow({selectedLead}) {
    
    const leadData = (selectedLead) => {
        if (selectedLead){
            document.querySelector('.lead-show-container').classList.add('show');
            return(
                    <LeadsShowBodyContainer selectedLead={selectedLead}/>
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
