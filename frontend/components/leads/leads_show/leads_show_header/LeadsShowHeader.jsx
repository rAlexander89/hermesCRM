import React from 'react'

function LeadsShowHeader({selectedLead, setSelectedLead}) {

    const collapse = (e, setSelectedLead) => {
        e.preventDefault()
        document.querySelector('.lead-show-container').classList.remove('show');
        setSelectedLead(null)
    }

    return (
    <div className='lead-show-header'>
        {/* <div id='sub-date'>Submission Date: 4.23.20</div>
        <div className='lead-prime-details'>
            <div className='lead-show-address'>{`${selectedLead.address}`}</div>
            <div className='lead-price-details'>Offered 870,000/List 935,000/ARV 1,300,000</div>
        </div>
        <div id='close' onClick={e => collapse(e, setSelectedLead)}>X</div> */}
    </div>
    )
}

export default LeadsShowHeader
