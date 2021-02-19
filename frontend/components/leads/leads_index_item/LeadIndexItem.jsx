import React from 'react'

function LeadIndexItem({lead, index}) {
    debugger
    return (
        <div className='lead-index-item'>
            <div class="flex-row" id='index'>{index + 1}</div>
            <div class="flex-row" id='submitted'>4.23.20</div>
            <div class="flex-row" id='status'>A</div>
            <div class="flex-row" id='l-a'>0.68</div>
            <div class="flex-row" id='o-l'>0.95</div>
            <div class="flex-row" id='list-price'>1,500,000</div>
            <div class="flex-row" id='arv'>2,000,000</div>
            <div class="flex-row" id='offered'>1,300,000</div>
            <div class="flex-row" id='agent'>Tony Mark Johnson Stevens</div>
            <div class="flex-row" id='phone'>323.215.3641</div>
            <div class="flex-row" id='address'> {lead.address}, {lead.city}, {lead.zipcode} </div>
            <div class="flex-row" id='last-contact'> 4.25.20 </div>
        </div>
    )
}

export default LeadIndexItem
