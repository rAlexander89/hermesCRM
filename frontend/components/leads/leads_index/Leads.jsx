import React from 'react'
import LeadIndexItemContainer from '../leads_index_item/LeadIndexItemContainer'
import LeadShowContainer from '../leads_show/LeadShowContainer'

function Leads({
    pipeline, setSelectedLead, selectedLead, selectPipeline, setSelectPipeline, 
    contacted, setContacted, listingStatus, setListingStatus, pipelineStatus, setPipelineStatus }){

    
    function toggleLeadType(e){
        e.preventDefault();
        selectPipeline !== e.target.innerText ? setSelectPipeline(e.target.innerText) : null
    }

    function dispositionSelector(pipeline){
        return(
            <>
                {pipeline.map((lead, i) => (
                    <LeadIndexItemContainer
                        index={i}
                        lead={lead}
                        key={lead.id}
                        status={lead.listing_status}
                        setSelectedLead={setSelectedLead}              
                        />
                ))}
            </>
        )
    }
        
    return (
        <div className='leads-container'>
            <div className='leads-header'>Leads</div>
                <LeadShowContainer 
                    selectedLead={selectedLead} setSelectedLead={setSelectedLead} 
                    contacted={contacted} setContacted={setContacted}
                    listingStatus={listingStatus} setListingStatus={setListingStatus}
                    pipelineStatus={pipelineStatus} setPipelineStatus={setPipelineStatus}
                    />
                <div className='flex-table table-header'>
                     <div className='unassigned' id={selectPipeline === 'Unassigned' ? 'selected' : null } onClick={toggleLeadType}>
                        Unassigned
                    </div>
                     <div className='contacted' id={selectPipeline === 'Contacted' ? 'selected' : null } onClick={toggleLeadType}>
                        Contacted
                    </div>
                     <div className='counter-received' id={selectPipeline === 'Counter Received' ? 'selected' : null }  onClick={toggleLeadType}>
                        Counter Received
                    </div>
                     <div className='counter-responded' id={selectPipeline === 'Counter Responded' ? 'selected' : null } onClick={toggleLeadType}>
                        Counter Responded                    
                    </div>
                     <div className='under-contract' id={selectPipeline === 'Under Contract' ? 'selected' : null } onClick={toggleLeadType}>
                        Under Contract                     
                    </div>
                     <div className='contingencies-removed' id={selectPipeline === 'Contingencies Removed' ? 'selected' : null } onClick={toggleLeadType}>
                        Contingencies Removed                     
                    </div>
                     <div className='closed' id={selectPipeline === 'Closed' ? 'selected' : null } onClick={toggleLeadType}>
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
                {pipeline ? dispositionSelector(pipeline) : 'Looks like you aint got that kind of thing!'}
            </div>
        </div>
    )
}

export default Leads
