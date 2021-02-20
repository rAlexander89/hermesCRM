import React from 'react'


function LeadIndexItem({lead, index, setSelectedLead, setShowLead}) {


    const showThisLead = (e, lead, setSelectedLead, setShowLead) => {
        e.preventDefault();
        setSelectedLead(lead)
        setShowLead(true)

        document.querySelector(`.x${index}`).addEventListener('click', function(){
        document.querySelector('.lead-show-container').classList.toggle('show');
        });

    }

    return (
        <div className={`lead-index-item x${index}`} onClick={e => showThisLead(e, lead, setSelectedLead, setShowLead)}>
            <div className="flex-row" id='index'>{index + 1}</div>
            <div className="flex-row" id='submitted'>4.23.20</div>
            <div className="flex-row" id='status'>A</div>
            <div className="flex-row" id='l-a'>0.68</div>
            <div className="flex-row" id='o-l'>0.95</div>
            <div className="flex-row" id='list-price'>1,500,000</div>
            <div className="flex-row" id='arv'>2,000,000</div>
            <div className="flex-row" id='offered'>1,300,000</div>
            <div className="flex-row" id='agent'>Tony Mark Johnson Stevens</div>
            <div className="flex-row" id='phone'>323.215.3641</div>
            <div className="flex-row" id='address'> {lead.address}, {lead.city}, {lead.zipcode} </div>
            <div className="flex-row" id='last-contact'> 4.25.20 </div>
        </div>
    )
}

export default LeadIndexItem
