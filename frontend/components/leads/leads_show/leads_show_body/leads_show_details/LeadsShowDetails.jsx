import React, { useEffect, useRef } from 'react'
import { addComma } from '../../../../../utils/misc/formatting/formatting'
import { potentialMaxOffer } from '../../../../../utils/misc/calculators/calculators'
import { updateProperty } from '../../../../../utils/api/property_api_util'
// import { changeStatus } from '../../../../../utils/misc/lead_change_status/lead_change_status'

function LeadsShowDetails({selectedLead}) {


    function changeStatus(e){
        e.preventDefault()
        selectedLead.status = e.target.value
        updateProperty(selectedLead)
        // updateProperty(selectedLead)
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
                            {/* <select defaultValue={selectedLead.status} onChange={e => changeStatus(e, selectedLead)}> */}
                            <select defaultValue={selectedLead.status} onChange={changeStatus}>
                                <option value='Active'>Active</option>
                                <option value='Under Contract'>Under Contract</option>
                                <option value='Pending'>Pending</option>
                                <option value='Closed'>Closed</option>
                            </select>  
                            {/* <select value={status} onChange={e => changeStatus(e, selectedLead)}>
                                <option defaultValue={status === 'Active'}>Active</option>
                                <option defaultValue={status === 'Under Contract'}>Under Contract</option>
                                <option defaultValue={status === 'Pending'}>Pending</option>
                                <option defaultValue={status === 'Closed'}>Closed</option>
                            </select>               */}
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
