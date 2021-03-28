import React, { useContext } from 'react'
import LeadIndexItem from '../leads_index_item/LeadIndexItem'
import LeadShow from '../leads_show/LeadShow'
import { LeadsPipelineContext } from '../../dashboard/Dashboard'

function Leads(){

    let ctx = useContext(LeadsPipelineContext)
    
    function toggleLeadType(e){
        e.preventDefault();
        ctx.selectPipeline !== e.target.innerText && e.target.innerText !== '' ? ctx.setSelectPipeline(e.target.innerText) : ctx.setSelectPipeline('Watched')
    }

    function dispositionSelector(pipeline){
        
        return <>
            {pipeline.map((lead, i) => (
                <LeadIndexItem
                    index={i}
                    lead={lead}
                    key={lead.id}
                    status={lead.listing_status}
                    setSelectedLead={ctx.setSelectedLead}              
                />))}
        </>
    }
        
    return (
        <div className='leads-container'>
            <div className='leads-header'>Leads</div>
                <LeadShow />
                <div className='flex-table table-header'>
                     <div className='uncontacted' id={ctx.selectPipeline === 'Uncontacted' ? 'selected' : null } onClick={toggleLeadType}>
                        Uncontacted
                    </div>
                     <div className='contacted' id={ctx.selectPipeline === 'Contacted' ? 'selected' : null } onClick={toggleLeadType}>
                        Contacted
                    </div>
                     <div className='counter-received' id={ctx.selectPipeline === 'Counter Received' ? 'selected' : null }  onClick={toggleLeadType}>
                        Counter Received
                    </div>
                     <div className='counter-responded' id={ctx.selectPipeline === 'Counter Responded' ? 'selected' : null } onClick={toggleLeadType}>
                        Counter Responded                    
                    </div>
                     <div className='under-contract' id={ctx.selectPipeline === 'Under Contract' ? 'selected' : null } onClick={toggleLeadType}>
                        Under Contract                     
                    </div>
                     <div className='contingencies-removed' id={ctx.selectPipeline === 'Contingencies Removed' ? 'selected' : null } onClick={toggleLeadType}>
                        Contingencies Removed                     
                    </div>
                    <div className='closed' id={ctx.selectPipeline === 'Closed' ? 'selected' : null } onClick={toggleLeadType}>
                        Closed                     
                    </div>
                    <div className='watched' id={ctx.selectPipeline === 'Watched' ? 'selected' : null } onClick={toggleLeadType}>
                        <span className="iconify" data-icon="vscode-icons:file-type-bolt" data-inline="false"></span>
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
                {ctx.pipeline ? dispositionSelector(ctx.pipeline) : 'Looks like you aint got that kind of thing!'}
            </div>
        </div>
    )
}

export default Leads
