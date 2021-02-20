import React, { useEffect, useState, useRef } from 'react'
import LeadIndexItemContainer from '../leads_index_item/LeadIndexItemContainer'
import LeadShowContainer from '../leads_show/LeadShowContainer'


function Leads({fetchProperties, leads}) {


    const [showLead, setShowLead] = useState(false);
    const [selectedLead, setSelectedLead] = useState(null);

    useEffect(() => {
        fetchProperties()
    },[])

    return (
        <div className='leads-container'>
            <div className='leads-header'>Leads</div>
            <LeadShowContainer showLead={showLead} setShowLead={setShowLead} selectedLead={selectedLead}/>
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
                    <div class="flex-row" id='last-contact'>Last</div>
                </div>  
                {leads.map((lead, i) => (
                 <LeadIndexItemContainer
                    index={i}
                    lead={lead}
                    key={lead.id}
                    setShowLead={setShowLead}
                    setSelectedLead={setSelectedLead}
                    setShowLead={setShowLead}
                    />
                ))}  
            </div>
        </div>
    )
}

export default Leads
