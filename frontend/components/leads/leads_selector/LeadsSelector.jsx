import React, { useContext } from 'react'
import { LeadsPipelineContext } from '../../dashboard/Dashboard'
import { useDispatch } from 'react-redux'
import { logout } from '../../../actions/session_actions'
import { lightningBoltSVG, logoutSVG } from '../../misc/svgs'


function LeadsSelector() {

    let ctx = useContext(LeadsPipelineContext)

    const dispatch = useDispatch()


    function toggleLeadType(e){
        e.preventDefault();
        let target = e.target.dataset.value
        ctx.selectPipeline !== target ? ctx.setSelectPipeline(target) : null
    }

    return  <div className='flex-table table-header'>
                    <div className='uncontacted' data-value='Uncontacted' id={ctx.selectPipeline === 'Uncontacted' ? 'selected' : null } onClick={toggleLeadType}>
                    UNCONTACTED
                </div>
                    <div className='contacted' data-value='Contacted' id={ctx.selectPipeline === 'Contacted' ? 'selected' : null } onClick={toggleLeadType}>
                    CONTACTED
                </div>
                    <div className='counter-received' data-value='Counter Received' id={ctx.selectPipeline === 'Counter Received' ? 'selected' : null }  onClick={toggleLeadType}>
                    COUNTER RECEIVED
                </div>
                    <div className='counter-responded' data-value='Counter Responded' id={ctx.selectPipeline === 'Counter Responded' ? 'selected' : null } onClick={toggleLeadType}>
                    COUNTER RESPONDED                   
                </div>
                    <div className='under-contract' data-value='Under Contract' id={ctx.selectPipeline === 'Under Contract' ? 'selected' : null } onClick={toggleLeadType}>
                    UNDER CONTRACT                  
                </div>
                <div className='closed' data-value='Closed' id={ctx.selectPipeline === 'Closed' ? 'selected' : null } onClick={toggleLeadType}>
                    CLOSED                     
                </div>
                <div className='watched' data-value='Watched' id={ctx.selectPipeline === 'Watched' ? 'selected' : null } onClick={toggleLeadType}>
                    {lightningBoltSVG(toggleLeadType)}
                </div>
                <div className='logoff' onClick={() => dispatch(logout())}>
                    {logoutSVG()}
                </div>
            </div>
}

export default LeadsSelector
