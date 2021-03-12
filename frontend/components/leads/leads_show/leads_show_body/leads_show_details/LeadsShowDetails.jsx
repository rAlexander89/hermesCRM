import React, {useEffect, useRef} from 'react'
import {updateProperty} from '../../../../../utils/property_api_util'

function LeadsShowDetails({selectedLead}) {

    function changeStatus(e){
        e.preventDefault()
        selectedLead.status = e.target.value
        updateProperty(selectedLead)
    }

    function addComma(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function potentialMaxOffer(arv){
        let arv_int = parseInt(arv.replaceAll(',',''))
        return addComma(Math.floor(arv_int * 0.73))
    }

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
                    <select defaultValue={selectedLead.status} onChange={changeStatus}>
                        <option value='Active'>Active</option>
                        <option value='Under Contract'>Under Contract</option>
                        <option value='Pending'>Pending</option>
                        <option value='Closed'>Closed</option>
                    </select>              
                </div>
            </div>
            <div className='lead-detail'>
                <div className='detail-left'>
                    Address                
                </div>
                  <div className='detail-right'>
                    {selectedLead.address}             
                </div>
            </div>
            <div className='lead-detail'>
                <div className='detail-left'>
                    Offer/List/ARV                
                </div>
                  <div className='detail-right'>
                    {addComma(selectedLead.offer)}/{addComma(selectedLead.list_price)}/{addComma(selectedLead.arv)}
                </div>
            </div>
             <div className='lead-detail'>
                <div className='detail-left'>
                    Potential Max Offer                
                </div>
                  <div className='detail-right'>
                      {potentialMaxOffer(selectedLead.arv)}                    
                </div>
            </div>
            <div className='lead-detail'>
                <div className='detail-left'>
                    Bed/Bath               
                </div>
                  <div className='detail-right'>
                    {selectedLead.bed_count}/{selectedLead.bath_count}
                </div>
            </div>
            <div className='lead-detail'>
                <div className='detail-left'>
                    GLA/LOT                
                </div>
                  <div className='detail-right'>
                      {addComma(selectedLead.gla)}/{addComma(selectedLead.lot_area)}
                </div>
            </div>
        </div>
    </div>
    )
}

export default LeadsShowDetails
