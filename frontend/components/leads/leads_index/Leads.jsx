import React, { useEffect } from 'react'
import LeadIndexItemContainer from '../leads_index_item/LeadIndexItemContainer'

function Leads({fetchProperties, currentUser, leads}) {

    useEffect(() => {
            fetchProperties()
    },[])

    return (
        <div className='leads-container'>
            <div className='leads-header'>Leads</div>
            {leads.reverse().map(lead => (
                <LeadIndexItemContainer
                    lead={lead}
                    key={lead.id}/>
            ))
            }
        </div>
    )
}

export default Leads
