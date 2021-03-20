import React, { useEffect, useState } from 'react'
import LeadIndexItemContainer from '../leads_index_item/LeadIndexItemContainer'
import LeadShowContainer from '../leads_show/LeadShowContainer'

function Leads({fetchUnassignedPipeline, pipeline, setSelectedLead, selectedLead}){
    
    const [selectPipeline, setSelectPipeline] = useState('Unassigned')

    useEffect(() => {
        fetchUnassignedPipeline()
    },[]);

    function toggleLeadType(e){
        e.preventDefault();
        console.log('howdddyyy')
        selectPipeline !== e.target.innerText ? setSelectPipeline(e.target.innerText) : null
    }

     function dispositionSelector(pipeline){
        return(
            <>
               { 
               pipeline.map((lead, i) => (
                <LeadIndexItemContainer
                    index={i}
                    lead={lead}
                    key={lead.id}
                    setSelectedLead={setSelectedLead}               
                    />
                ))
                }
            </>
        )
            
    }

    if (pipeline){
        return (
        <div className='leads-container'>
            <div className='leads-header'>Leads</div>
                <LeadShowContainer selectedLead={selectedLead} setSelectedLead={setSelectedLead}/>
                <div className='flex-table table-header'>
                     <div className='unassigned' id='selected' onClick={toggleLeadType}>
                        Unassigned
                    </div>
                     <div className='contacted' onClick={toggleLeadType}>
                        Contacted
                    </div>
                     <div className='counter-received' id='' onClick={toggleLeadType}>
                        Counter Received
                    </div>
                     <div className='counter-responded' id='' onClick={toggleLeadType}>
                        Counter Responded                    
                    </div>
                     <div className='under-contract' id='' onClick={toggleLeadType}>
                        Under Contract                     
                    </div>
                     <div className='contingencies-removed' id='' onClick={toggleLeadType}>
                        Contingencies Removed                     
                    </div>
                     <div className='closed' id='' onClick={toggleLeadType}>
                        Closed                     
                    </div>
                </div>
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
                    <div className="flex-row" id='agent-name'> Listing Agent</div>
                    <div className="flex-row" id='phone'>Phone</div>
                    <div className="flex-row" id='address'>Address</div>
                    <div className="flex-row" id='agent-name'> Assigned Agent </div>
                    <div className="flex-row" id='last-contact'>Last</div>
                </div>  
                {dispositionSelector(pipeline)}
            </div>
        </div>
    )} else { return null }
}

export default Leads
