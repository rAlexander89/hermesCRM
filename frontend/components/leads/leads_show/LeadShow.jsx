import React from 'react'

function LeadShow({showLead, selectedLead, setShowLead}) {

    const collapse = e => {
        e.preventDefault()
        if($('.show').length >= 1){
                document.querySelector('.lead-show-container').classList.remove('show');
            }
    }

    if (showLead){
            return (
            <div className='lead-show-container'>
                <p onClick={e => collapse(e)}>x</p>{`${selectedLead.address}`}
            </div>
        )
    } else {
        return null
    }
}

export default LeadShow
