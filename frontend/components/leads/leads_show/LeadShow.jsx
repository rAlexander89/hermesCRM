import React from 'react'
import LeadsShowBodyContainer from './leads_show_body/LeadsShowBodyContainer'



function LeadShow({selectedLead, 
    contacted, setContacted, 
    listingStatus, setListingStatus,
    pipelineStatus, setPipelineStatus,
    watched, setWatched
}) {
    
    const leadData = (selectedLead) => {
        if (selectedLead){
            document.querySelector('.lead-show-container').classList.add('show');
            return(
                    <LeadsShowBodyContainer 
                        contacted={contacted} setContacted={setContacted} 
                        selectedLead={selectedLead}
                        listingStatus={listingStatus} setListingStatus={setListingStatus}
                        pipelineStatus={pipelineStatus} setPipelineStatus={setPipelineStatus}
                        watched={watched} setWatched={setWatched}
                    />
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
