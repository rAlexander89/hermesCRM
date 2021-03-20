import React, { useEffect } from 'react'
import { addComma } from '../../../../../utils/misc/formatting/formatting'
import { potentialMaxOffer } from '../../../../../utils/misc/calculators/calculators'
import { updateProperty } from '../../../../../utils/api/property_api_util'
import { updatePipeline } from '../../../../../utils/api/pipeline_api_utils'

function LeadsShowDetails({property_id, pipeline, property, fetchProperty}) {

    let contacted = pipeline.contacted ? true : false
    console.log(pipeline.id)
    console.log(contacted)

    useEffect(() => {
        fetchProperty(property_id)
    }, [property_id])
    
    function changeStatus(e){
       e.preventDefault()
       property["status"] = e.target.value
       updateProperty(property)
    }

    function changeContacted(e, contacted, pipeline){
        e.preventDefault()
        contacted = !contacted
        pipeline["contacted"] = contacted
        updatePipeline(pipeline)
            // .then(res => {
            //     fetchProperty(property_id)
            // })
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
                            Status
                        </div>
                        <div className='detail-right'>
                            <select defaultValue={property.status} onChange={changeStatus}>
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
                            <div className='contact-checkbox' onClick={e =>changeContacted(e, contacted, pipeline)}>
                                {contacted ? 'X' : ' '}
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
    )} else { return null }
}

export default LeadsShowDetails
