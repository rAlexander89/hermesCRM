import React from 'react'
import LeadsShowHeaderContainer from './leads_show_header/LeadsShowHeaderContainer'
import LeadsShowBodyContainer from './leads_show_body/LeadsShowBodyContainer'

// function LeadShow({selectedLead, setSelectedLead}) {
function LeadShow({selectedLead, setSelectedLead, fetchProperty}) {


    const leadData = (selectedLead, setSelectedLead) => {
        if (selectedLead){
            document.querySelector('.lead-show-container').classList.add('show');

            return(
                <>
                {/* <LeadsShowHeaderContainer/> */}
                <LeadsShowBodyContainer selectedLead={selectedLead} setSelectedLead={setSelectedLead}/>
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
