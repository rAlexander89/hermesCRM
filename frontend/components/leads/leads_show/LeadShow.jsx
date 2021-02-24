import React from 'react'
import LeadsShowHeaderContainer from './leads_show_header/LeadsShowHeaderContainer'
import LeadsShowBodyContainer from './leads_show_body/LeadsShowBodyContainer'

function LeadShow({selectedLead, setSelectedLead}) {


    const leadData = (selectedLead, setSelectedLead) => {
        if (selectedLead){
            document.querySelector('.lead-show-container').classList.add('show');

            return(
                <>
                <LeadsShowHeaderContainer selectedLead={selectedLead} setSelectedLead={setSelectedLead}/>
                <LeadsShowBodyContainer/>

                </>
            )
        } 
    }

    return (
        <div className='lead-show-container'>
            {leadData(selectedLead, setSelectedLead)}
        </div>
    )

}

export default LeadShow
