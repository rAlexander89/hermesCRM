import React, { useContext } from 'react'
import LeadIndexItem from '../leads_index_item/LeadIndexItem'
import LeadShow from '../leads_show/LeadShow'
import { LeadsPipelineContext } from '../../dashboard/Dashboard'

function Leads(){

    let ctx = useContext(LeadsPipelineContext)
    
    function toggleLeadType(e){
        e.preventDefault();
        let target = e.target.dataset.value
        ctx.selectPipeline !== target ? ctx.setSelectPipeline(target) : null
    }

    function dispositionSelector(pipeline){
        
        return <div className='leads-dash'>
            <LeadShow />
            <div className="table-container">
                <div className="flex-table table-header">
                    <div className="flex-row" id='index'>#</div>
                    <div className="flex-row" id='submitted'>O</div>
                    <div className="flex-row" id='status'>S</div>
                    {/* <div className="flex-row" id='o-l'>O-L</div> */}
                    {/* <div className="flex-row" id='l-a'>L-A</div> */}
                    {/* <div className="flex-row" id='offered'>Offered</div>
                    <div className="flex-row" id='list-price'>List Price</div>
                    <div className="flex-row" id='arv'>ARV</div> */}
                    <div className="flex-row" id='agent-name'> Listing Agent</div>
                    {/* <div className="flex-row" id='phone'>Phone</div> */}
                    <div className="flex-row" id='address'>Address</div>
                    {/* <div className="flex-row" id='agent-name'> Assigned Agent </div> */}
                    <div className="flex-row" id='last-contact'>Last</div>
                </div> 
                {pipeline.map((lead, i) => (
                    <LeadIndexItem
                        index={i}
                        lead={lead}
                        key={lead.id}
                        status={lead.listing_status}
                        setSelectedLead={ctx.setSelectedLead}              
                    />))}
            </div>
        </div>
    }
        
    return (
        <div className='leads-container'>
            <div className='leads-header'>Leads</div>
                <div className='flex-table table-header'>
                     <div className='uncontacted' data-value='Uncontacted' id={ctx.selectPipeline === 'Uncontacted' ? 'selected' : null } onClick={toggleLeadType}>
                        Uncontacted
                    </div>
                     <div className='contacted' data-value='Contacted' id={ctx.selectPipeline === 'Contacted' ? 'selected' : null } onClick={toggleLeadType}>
                        Contacted
                    </div>
                     <div className='counter-received' data-value='Counter Received' id={ctx.selectPipeline === 'Counter Received' ? 'selected' : null }  onClick={toggleLeadType}>
                        Counter Rec
                    </div>
                     <div className='counter-responded' data-value='Counter Responded' id={ctx.selectPipeline === 'Counter Responded' ? 'selected' : null } onClick={toggleLeadType}>
                        Counter Res                    
                    </div>
                     <div className='under-contract' data-value='Under Contract' id={ctx.selectPipeline === 'Under Contract' ? 'selected' : null } onClick={toggleLeadType}>
                        Under Contract                     
                    </div>
                     <div className='contingencies-removed' data-value='Contingencies Removed' id={ctx.selectPipeline === 'Contingencies Removed' ? 'selected' : null } onClick={toggleLeadType}>
                        C Removed                     
                    </div>
                    <div className='closed' data-value='Closed' id={ctx.selectPipeline === 'Closed' ? 'selected' : null } onClick={toggleLeadType}>
                        Closed                     
                    </div>
                    <div className='watched' data-value='Watched' id={ctx.selectPipeline === 'Watched' ? 'selected' : null } onClick={toggleLeadType}>
                        <span className="iconify" data-icon="vscode-icons:file-type-bolt" data-inline="false"></span>
                    </div>
                </div>
                {ctx.pipeline ? dispositionSelector(ctx.pipeline) : 'Looks like you aint got that kind of thing!'}
        </div>
    )
}

export default Leads
