import React from 'react'

function LeadsShowDetails({selectedLead}) {

    function addComma(num){
         return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                    <select>
                        <option>Active</option>
                        <option>Under Contract</option>
                        <option>Pending</option>
                        <option>Closed</option>
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
             {/* <div className='lead-detail'>
                <div className='detail-left'>
                    Potential Max Offer                
                </div>
                  <div className='detail-right'>
                    1,254,456
                </div>
            </div> */}
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
