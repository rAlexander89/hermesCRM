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
    
        return <div className='flex-table-body'>
                    {pipeline.map((lead, i) => (
                        <LeadIndexItem
                            index={i}
                            lead={lead}
                            key={lead.id}
                            status={lead.listing_status}
                            setSelectedLead={ctx.setSelectedLead}              
                        />))}
                </div>
    }
        
    return (
        <div className='leads-container'>
                <div className='flex-table table-header'>
                     <div className='uncontacted' data-value='Uncontacted' id={ctx.selectPipeline === 'Uncontacted' ? 'selected' : null } onClick={toggleLeadType}>
                        Uncontacted
                    </div>
                     <div className='contacted' data-value='Contacted' id={ctx.selectPipeline === 'Contacted' ? 'selected' : null } onClick={toggleLeadType}>
                        Contacted
                    </div>
                     <div className='counter-received' data-value='Counter Received' id={ctx.selectPipeline === 'Counter Received' ? 'selected' : null }  onClick={toggleLeadType}>
                        Counter Recieved
                    </div>
                     <div className='counter-responded' data-value='Counter Responded' id={ctx.selectPipeline === 'Counter Responded' ? 'selected' : null } onClick={toggleLeadType}>
                        Counter Responded                    
                    </div>
                     <div className='under-contract' data-value='Under Contract' id={ctx.selectPipeline === 'Under Contract' ? 'selected' : null } onClick={toggleLeadType}>
                        Under Contract                     
                    </div>
                     <div className='contingencies-removed' data-value='Contingencies Removed' id={ctx.selectPipeline === 'Contingencies Removed' ? 'selected' : null } onClick={toggleLeadType}>
                        Contingencies Removed                     
                    </div>
                    <div className='closed' data-value='Closed' id={ctx.selectPipeline === 'Closed' ? 'selected' : null } onClick={toggleLeadType}>
                        Closed                     
                    </div>
                    <div className='watched' data-value='Watched' id={ctx.selectPipeline === 'Watched' ? 'selected' : null } onClick={toggleLeadType}>
                        <span className="iconify" data-icon="vscode-icons:file-type-bolt" data-inline="false"></span>
                    </div>
                </div>
                <div className='leads-dash'>
                    <LeadShow />
                    <div className="table-container">
                        <div className='table-index-header'>
                            <div className='header-data'>
                                <div className="header-number" id='index'>#</div>
                                <div className='card'>
                                        <div className='item-address'> <h3 className='card-title'>Address</h3>
                                            <div className='item-offer-det'>
                                                Offer/List Price/ARV                             
                                            </div>
                                        </div>
                                        <div className='item-dates'> 
                                            <div className='header-contact-dates'>
                                                1st/Last Contact
                                            </div>
                                        </div>
                                </div>
                            </div>
    
                        </div>
                        {ctx.pipeline ? dispositionSelector(ctx.pipeline) : 'Looks like you aint got that kind of thing!'}
                    </div>
                </div>
        </div>
    )
}

export default Leads
