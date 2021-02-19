import React, { useEffect } from 'react'
import LeadIndexItemContainer from '../leads_index_item/LeadIndexItemContainer'

function Leads({fetchProperties, currentUser, leads}) {

    useEffect(() => {
            fetchProperties()
    },[])

    return (
        <div className='leads-container'>
            <div className='leads-header'>Leads</div>
            <div class="table-container">
                <div class="flex-table table-header">
                    <div class="flex-row" id='index'>#</div>
                    <div class="flex-row" id='submitted'>O</div>
                    <div class="flex-row" id='status'>S</div>
                    <div class="flex-row" id='l-a'>L-A</div>
                    <div class="flex-row" id='o-l'>O-L</div>
                    <div class="flex-row" id='list-price'>List Price</div>
                    <div class="flex-row" id='arv'>ARV</div>
                    <div class="flex-row" id='offered'>Offered</div>
                    <div class="flex-row" id='agent'>Agent</div>
                    <div class="flex-row" id='phone'>Phone</div>
                    <div class="flex-row" id='address'>Address</div>
                </div>  
                {leads.reverse().map((lead, i) => (
                 <LeadIndexItemContainer
                    index={i}
                    lead={lead}
                    key={lead.id}/>
            ))
            }  
            </div>
        </div>
    )
}

export default Leads
