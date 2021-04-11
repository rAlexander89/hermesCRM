import React, { useContext } from 'react'
import LeadIndexItem from '../leads_index_item/LeadIndexItem'
import { LeadsPipelineContext } from '../../dashboard/Dashboard'
import { newButton } from '../../misc/svgs'
function Leads(){

    let ctx = useContext(LeadsPipelineContext)
    
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
        
    return <div className="table-container">
                <div className='table-index-header'>
                    <div className='header-data'>
                        <div className='card'>
                                <div className='item-address'> 
                                    <h2 className='card-title'>Address</h2>
                                </div>
                                {newButton()}
                        </div>
                    </div>
                </div>
                {ctx.pipeline ? dispositionSelector(ctx.pipeline) : 'Looks like you aint got that kind of thing!'}
            </div>
}

export default Leads
