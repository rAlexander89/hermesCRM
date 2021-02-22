import React from 'react'

function LeadShow({selectedLead, setSelectedLead}) {

    const collapse = (e, setSelectedLead) => {
        e.preventDefault()
        document.querySelector('.lead-show-container').classList.remove('show');
        setSelectedLead(null)
    }

    const leadData = (selectedLead, setSelectedLead) => {
        
        if (selectedLead){
            document.querySelector('.lead-show-container').classList.add('show');
            return(
                <div className='lead-show-header'>
                    <span>4.23.20</span>
                    <span className='lead-show-address'>{`${selectedLead.address}`}</span>
                    <p onClick={e => collapse(e, setSelectedLead)}>close</p>
                </div>
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
