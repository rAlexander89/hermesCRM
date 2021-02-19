import React from 'react'

function LeadIndexItem({lead, index}) {
    debugger
    return (
        <div className='lead-index-item'>
            <div class="flex-row" id='index'>{index + 1}</div>
            <div class="flex-row" id='submitted'>O</div>
            <div class="flex-row" id='status'>S</div>
            <div class="flex-row" id='l-a'>L-A</div>
            <div class="flex-row" id='o-l'>O-L</div>
            <div class="flex-row" id='list-price'>List Price</div>
            <div class="flex-row" id='arv'>ARV</div>
            <div class="flex-row" id='offered'>Offered</div>
            <div class="flex-row" id='agent'>Agent</div>
            <div class="flex-row" id='phone'>Phone</div>
            <div class="flex-row" id='address'> {lead.address}, {lead.city}, {lead.zipcode} </div>
        </div>
    )
}

export default LeadIndexItem
