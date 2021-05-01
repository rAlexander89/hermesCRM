import React, { useEffect, useState, useContext } from 'react'
import { addComma } from '../../../../../utils/misc/formatting/formatting'
import { potentialMaxOffer } from '../../../../../utils/misc/calculators/calculators'
import { updatePipeline, fetchPipelineById } from '../../../../../utils/api/pipeline_api_utils'
import { LeadsPipelineContext } from '../../../../dashboard/Dashboard'
import { fetchProperty } from '../../../../../utils/api/property_api_util'


function LeadsShowDetails({}) {

    const [property, setProperty] = useState(false)
    
    let ctx = useContext(LeadsPipelineContext)
    debugger
    let { pipeline } = ctx.selectedLead
    debugger
    let { contacted, watched } = ctx

    if (!pipeline){ return null}

    debugger

    useEffect(() => {
        fetchProperty(pipeline.property_id)
            .then(res => {
                setProperty(res.property) 
                ctx.setContacted(pipeline.contacted)
                ctx.setWatched(pipeline.watched)
                ctx.setPipelineStatus(pipeline.pipeline_status)
            })
    }, [pipeline.property_id, pipeline.listingStatus, pipeline.pipelineStatus])

    useEffect(() => {
        fetchPipelineById(pipeline.id)
    }, [pipeline])

    function updateStatus(e){
        e.preventDefault()
        let whatIsChanging = e.target.classList.value
        let newStatus = e.target.value

        switch(whatIsChanging){
            case('listing-status-select'):
                pipeline['listing_status'] = newStatus
                break
            case('pipeline-status-select'):
                pipeline['pipeline_status'] = newStatus
                break
            case('contact-checkbox'):
                pipeline['contacted'] = !contacted
                break
            case('watched-checkbox'):
                pipeline['watched'] = !watched
                break
        }


        updatePipeline(pipeline)
            .then(res => {
                switch(whatIsChanging){
                    case('listing-status-select'):
                        ctx.setListingStatus(res.listing_status)
                        break
                    case('pipeline-status-select'):
                        ctx.setPipelineStatus(res.pipeline_status)
                        break
                    case('contact-checkbox'):
                        ctx.setContacted(res.contacted)
                        break
                    case('watched-checkbox'):
                        ctx.setWatched(res.watched)
                        break
                }
            })
    }

    function pipelineListingStatus(status){
        return(
             <div className='lead-detail'>
                <div className='detail-left'>
                    <h2 className='card-sub-title'>Listing Status</h2>
                </div>
                <div className='detail-right'>
                    <select className='listing-status-select' value={status} onChange={updateStatus}>
                        <option value='Coming Soon'>Coming Soon</option>
                        <option value='Active'>Active</option>
                        <option value='Under Contract'>Under Contract</option>
                        <option value='Pending'>Pending</option>
                        <option value='Hold'>Hold</option>
                        <option value='Closed'>Closed</option>
                    </select>       
                </div>
            </div>
        )
    }

    function pipelinePipelineStatus(status, contacted){
        let advancedDispos = ['Counter Received', 'Counter Responded', 'Under Contract', 'Closed' ]
        let value = advancedDispos.includes(status) ?  status : 'Contacted'
        return(
            <div className='lead-detail'>
                <div className='detail-left'>
                    <h2 className='card-sub-title'>Pipeline Status</h2>
                </div>
                <div className='detail-right'>
                    {contacted ?
                    <select className='pipeline-status-select' value={value} onChange={updateStatus}>
                     {/* <select className='pipeline-status-select' value={status} onChange={updateStatus}> */}
                        <option value='Contacted'>Contacted</option>
                        <option value='Counter Received'>Counter Received</option>
                        <option value='Counter Responded'>Counter Responded</option>
                        <option value='Under Contract'>Under Contract</option>
                        <option value='Contingencies Removed'> Contingencies Removed</option>
                        <option value='Closed'>Closed</option>
                    </select>   
                    : 
                    'Uncontacted'}    
                </div>
            </div>
        )
    }

    if(property){
            return (
            <div className='lead-show-listing-detail'>
                <div className='lead-show-contact-header'>
                    <h3 className='card-title'>Lead Property Detail</h3>
                </div>
                <div className='lead-details'>
                    {pipelineListingStatus(pipeline.listing_status)}
                    {pipelinePipelineStatus(pipeline.pipeline_status, contacted)}
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            <h2 className='card-sub-title'>Address</h2>
                        </div>
                        <div className='detail-right'>
                            {property.address}             
                        </div>
                    </div>
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            <h2 className='card-sub-title'>Offer/List/ARV</h2>
                        </div>
                        <div className='detail-right'>
                            {addComma(property.offer)}/{addComma(property.list_price)}/{addComma(property.arv)}
                        </div>
                    </div>
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            <h2 className='card-sub-title'>Potential Max Offer</h2>
                        </div>
                        <div className='detail-right'>
                            {potentialMaxOffer(property.arv)}                    
                        </div>
                    </div>
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            <h2 className='card-sub-title'>Bed/Bath</h2>
                        </div>
                        <div className='detail-right'>
                            {property.bed_count}/{property.bath_count}
                        </div>
                    </div>
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            <h2 className='card-sub-title'>GTA/LOT</h2>
                        </div>
                        <div className='detail-right'>
                            {addComma(property.gla)}/{addComma(property.lot_area)}
                        </div>
                    </div>
                     <div className='lead-detail'>
                        <div className='detail-left'>
                            <h2 className='card-sub-title'>Contacted?</h2>
                        </div>
                        <div className='detail-right'>
                            <div className='contact-checkbox' onClick={updateStatus}>
                                {contacted ? 'X' : ' '}
                            </div>      
                        </div>
                    </div>
                    {contacted ?                         
                        <div className='lead-detail'>
                            <div className='detail-left'>
                                <h2 className='card-sub-title'>Watched?</h2>
                            </div>
                            <div className='detail-right'>
                                <div className='watched-checkbox' onClick={updateStatus}>
                                    {watched ? 'X' : ' '}
                                </div>      
                            </div>
                        </div> : null
                    }
                </div>
            </div>
    )} else { return null }
}

export default LeadsShowDetails