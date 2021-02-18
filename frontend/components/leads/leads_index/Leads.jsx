import React, { useEffect } from 'react'
import LeadIndexItemContainer from '../leads_index_item/LeadIndexItemContainer'

function Leads({fetchProperties, currentUser, leads}) {

    useEffect(() => {
            fetchProperties()
    },[])

    return (
        <div className='leads-container'>
            <div className='leads-header'>Leads</div>

            <div class="table-container">
                {/* <div class="flex-table header" role="rowgroup"> */}
                <div class="flex-table table-header">
                    <div class="flex-row" id='index'>#</div>
                    <div class="flex-row" id='submitted'>O</div>
                    <div class="flex-row" id='status'>S</div>
                    <div class="flex-row" id='l-a'>L-A</div>
                    <div class="flex-row" id='o-l'>O-L</div>
                    <div class="flex-row" id='list-price'>List Price</div>
                    <div class="flex-row" id='arv'>ARV</div>
                    <div class="flex-row" id='offered'>Offered</div>
                    <div class="flex-row" id='agent'>Agent</div>
                    <div class="flex-row" id='phone'>Phone</div>
                    <div class="flex-row" id='address'>Address</div>
                </div>    
            </div>
        </div>
        // <div className='leads-container'>
        //     <div className='leads-header'>Leads</div>
        //         <div className='table'>

        //         <div className='table-header'>
        //             <div className='cell'>
        //                 Date submitted
        //             </div>
        //             <div className='cell'>
        //                 L-A Ratio
        //             </div>
        //             <div className='cell'>
        //                 O-L Ratio
        //             </div>
        //             <div className='cell'>
        //                 List Price
        //             </div>
        //             <div className='cell'>
        //                 ARV
        //             </div>
        //             <div className='cell'>
        //                 Offered
        //             </div>
        //         </div>
        //     {leads.reverse().map(lead => (
        //         <LeadIndexItemContainer
        //             lead={lead}
        //             key={lead.id}/>
        //     ))
        //     }
        //     </div>
        // </div>
    )
}

export default Leads
