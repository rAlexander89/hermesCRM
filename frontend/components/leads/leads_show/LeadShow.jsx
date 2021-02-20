import React from 'react'

function LeadShow({showLead, selectedLead, setShowLead}) {
    if (showLead){
            return (
            <div className='lead-show-container'>
                {`${selectedLead.address}`}
            </div>
        )
    } else {
        return null
    }
}

export default LeadShow
