import React, { useEffect } from 'react'
import { addComma } from '../../../../../utils/misc/formatting/formatting'
import { potentialMaxOffer } from '../../../../../utils/misc/calculators/calculators'
import { updatePipeline } from '../../../../../utils/api/pipeline_api_utils'

function LeadsShowDetails({
    property_id, pipeline, property, fetchProperty, currentUserId, 
    contacted, setContacted,
    listingStatus, setListingStatus,
    pipelineStatus, setPipelineStatus
}) {

    useEffect(() => {
        fetchProperty(property_id)
        setContacted(pipeline.contacted)
    }, [property_id, listingStatus, pipelineStatus])

    function updateStatus(e){
        e.preventDefault()
        let propertyStatus = ['Coming Soon', 'Active', 'Under Contract', 'Contingencies Removed', 'Closed']
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
        }

        updatePipeline(pipeline)
            .then(res => {
                switch(whatIsChanging){
                    case('listing-status-select'):
                        setListingStatus(res.listing_status)
                        break
                    case('pipeline-status-select'):
                        setPipelineStatus(res.pipeline_status)
                        break
                    case('contact-checkbox'):
                        setContacted(res.contacted)
                        break
                }
            })

    }

    if(property){
        return (
            <div className='lead-show-listing-detail'>
                <div className='lead-show-contact-header'>
                    Lead Property Detail
                </div>
                <div className='lead-details'>
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            Listing Status
                        </div>
                        <div className='detail-right'>
                            <select className='listing-status-select' defaultValue={pipeline.listing_status} onChange={updateStatus}>
                                <option value='Coming Soon'>Coming Soon</option>
                                <option value='Active'>Active</option>
                                <option value='Under Contract'>Under Contract</option>
                                <option value='Pending'>Pending</option>
                                <option value='Hold'>Hold</option>
                                <option value='Closed'>Closed</option>
                            </select>       
                        </div>
                    </div>
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            Pipeline Status
                        </div>
                        <div className='detail-right'>
                            <select className='pipeline-status-select' defaultValue={pipeline.pipeline_status} onChange={updateStatus}>
                                <option value='Unassigned'>Unassigned</option>
                                <option value='Counter Received'>Counter Received</option>
                                <option value='Counter Responded'>Counter Responded</option>
                                <option value='Under Contract'>Under Contract</option>
                                <option value='Contingencies Removed'> Contingencies Removed</option>
                                <option value='Closed'>Closed</option>
                            </select>       
                        </div>
                    </div>
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            Address                
                        </div>
                        <div className='detail-right'>
                            {property.address}             
                        </div>
                    </div>
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            Offer/List/ARV                
                        </div>
                        <div className='detail-right'>
                            {addComma(property.offer)}/{addComma(property.list_price)}/{addComma(property.arv)}
                        </div>
                    </div>
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            Potential Max Offer                
                        </div>
                        <div className='detail-right'>
                            {potentialMaxOffer(property.arv)}                    
                        </div>
                    </div>
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            Bed/Bath               
                        </div>
                        <div className='detail-right'>
                            {property.bed_count}/{property.bath_count}
                        </div>
                    </div>
                    <div className='lead-detail'>
                        <div className='detail-left'>
                            GLA/LOT                
                        </div>
                        <div className='detail-right'>
                            {addComma(property.gla)}/{addComma(property.lot_area)}
                        </div>
                    </div>
                     <div className='lead-detail'>
                        <div className='detail-left'>
                            Contacted?                
                        </div>
                        <div className='detail-right'>
                            <div className='contact-checkbox' onClick={updateStatus}>
                                {contacted ? 'X' : ' '}
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
    )} else { return null }
}

export default LeadsShowDetails
