import React from 'react'

function LeadIndexItem({lead}) {
    return (
        <div className='lead-index-item'>

            <div className='lead-purchase-data'>
                <div className='lead-list-price'>
                    List Price
                </div>
                <div className='lead-list-price'>
                    ARV
                </div>
                <div className='lead-list-price'>
                    Offer
                </div>

            </div>


            <div className='lead-property-data'>
                <div className='lead-address'>
                    {lead.address}
                </div>
                <div className='lead-city'>
                    {lead.city}
                </div>
                <div className='lead-city'>
                    {lead.zipcode}
                </div>
            </div>
        </div>
    )
}

export default LeadIndexItem
