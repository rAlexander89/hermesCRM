import React, { useEffect, useState } from 'react'
import LeadIndexItemContainer from '../leads_index_item/LeadIndexItemContainer'
import LeadShowContainer from '../leads_show/LeadShowContainer'

function Leads({
    fetchProperties, 
    leads,
    unassignedProperties, 
    fetchUnassignedProperties}){


    const [selectedLead, setSelectedLead] = useState(null);
    const [selectTab, setSelectedTab] = useState('Unassigned')

    useEffect(() => {
        fetchUnassignedProperties();
        debugger
    },[selectTab]);

    function toggleLeadType(e){
        e.preventDefault();
        selectTab !== e.target.value ? setSelectedTab(e.target.value) : null
    }

    function showLeads(unassignedProperties){
        if (unassignedProperties === 'empty'){
            return 'empty shit bro' 
        } else {
            return(
                unassignedProperties.map((lead, i) => (
                 <LeadIndexItemContainer
                    index={i}
                    lead={lead}
                    key={lead.id}
                    setSelectedLead={setSelectedLead}               
                    />
                ))

            )
        }
    }

    return (
        <div className='leads-container'>
            <div className='leads-header'>Leads</div>
                <div className='flex-table table-header'>
                     <div className='unassigned' id='selected'>
                        Unassigned
                    </div>
                     <div className='counter-received' id=''>
                        Counter Recieved
                    </div>
                     <div className='counter-responded' id=''>
                        Counter Responded                    
                    </div>
                     <div className='under-contract' id=''>
                        Under Contract                     
                    </div>
                     <div className='contingencies-removed' id=''>
                        Contingencies Removed                     
                    </div>
                     <div className='closed' id=''>
                        Closed                     
                    </div>
                </div>
                <LeadShowContainer selectedLead={selectedLead} setSelectedLead={setSelectedLead}/>
            <div className="table-container">
                <div className="flex-table table-header">
                    <div className="flex-row" id='index'>#</div>
                    <div className="flex-row" id='submitted'>O</div>
                    <div className="flex-row" id='status'>S</div>
                    <div className="flex-row" id='o-l'>O-L</div>
                    <div className="flex-row" id='l-a'>L-A</div>
                    <div className="flex-row" id='offered'>Offered</div>
                    <div className="flex-row" id='list-price'>List Price</div>
                    <div className="flex-row" id='arv'>ARV</div>
                    <div className="flex-row" id='agent-name'>Agent</div>
                    <div className="flex-row" id='phone'>Phone</div>
                    <div className="flex-row" id='address'>Address</div>
                    <div className="flex-row" id='last-contact'>Last</div>
                </div>  
                {showLeads(unassignedProperties)}
                {/* {unassignedProperties.map((lead, i) => (
                // {leads.map((lead, i) => (
                 <LeadIndexItemContainer
                    index={i}
                    lead={lead}
                    key={lead.id}
                    setSelectedLead={setSelectedLead}               
                    />
                ))}   */}
            </div>
        </div>
    )
}

export default Leads
