import React from 'react'

function LeadsShowDetails() {
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
                        <option>Active - fell out</option>
                        <option>Under Contract - with us</option>
                        <option>Under Contract - not with us</option>
                        <option>Pending - with us</option>
                        <option>Pending - not with us</option>
                        <option>Closed - with us</option>
                        <option>Closed - not with us</option>
                    </select>              
                </div>
            </div>
            <div className='lead-detail'>
                <div className='detail-left'>
                    Address                
                </div>
                  <div className='detail-right'>
                    123 Fake St, Little Town, 90579              
                </div>
            </div>
            <div className='lead-detail'>
                <div className='detail-left'>
                    Offer/List/ARV                
                </div>
                  <div className='detail-right'>
                    654,456/854,456/1,254,456
                </div>
            </div>
             <div className='lead-detail'>
                <div className='detail-left'>
                    Max Offer                
                </div>
                  <div className='detail-right'>
                    1,254,456
                </div>
            </div>
            <div className='lead-detail'>
                <div className='detail-left'>
                    Bed/Bath               
                </div>
                  <div className='detail-right'>
                    3/2
                </div>
            </div>
            <div className='lead-detail'>
                <div className='detail-left'>
                    GLA/LOT                
                </div>
                  <div className='detail-right'>
                    2,000/6,000
                </div>
            </div>
        </div>
    </div>
    )
}

export default LeadsShowDetails
