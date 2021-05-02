import React, {useEffect, useState} from 'react'
import {fetchAgentByLicense} from '../../../utils/api/agent_api_utils'
import { fetchProperty } from '../../../utils/api/property_api_util'
import {addComma, offerDate, truncDigits, truncStatus, formatContact, updateDate} from '../../../utils/misc/formatting/formatting'


function LeadIndexItem({lead, index, setSelectedLead, highlightedLead, setHighlightedLead}) {

    const [agent, setAgent] = useState(false)
    const [property, setProperty] = useState(false)

    useEffect(() => {
        fetchProperty(lead.property_id)
            .then(property => {
                setProperty(property.property)
                fetchAgentByLicense(property.property.agent_id)
                    .then(agent => {
                        setAgent(agent)
                    })
            })     
    }, [lead.property_id])

    function isHighltedLead(propertyId, highlightedLead){
        return propertyId === highlightedLead
    }



    const showThisLead = (e, property, lead, agent, setSelectedLead) => {
        e.preventDefault();
        
        const showData = {
            property_id: property.id, 
            agent: agent,
            pipeline: lead
        }

        setHighlightedLead(property.id)
        setSelectedLead(showData)

    }

    if (agent){
        return(
            <div className={`lead-index-item x${index}`} id={ isHighltedLead(property.id, highlightedLead) ? 'selected-lead' : null }  onDoubleClick={e => showThisLead(e, property, lead, agent, setSelectedLead)}>
                <div className='number'>
                    <div className="flex-row" id='index'>{index + 1}</div>
                </div>
                <div className='card'>
                        <div className='item-address'> 
                            <p className='index-item-title'>
                                {property.house_number} {property.st_prefix} {property.st_name} {property.st_suffix}
                            </p>
                            {/* <div className='item-offer-det'>
                                        {addComma(property.offer)}/                             
                                        {addComma(property.list_price)}/
                                        {addComma(property.arv)}
                            </div> */}
                        </div>
                        {/* <div className='item-dates'> 
                            <div className='item-offer-det'>
                                        {offerDate(property.offer_date_dash)}/{updateDate(property.updated_at)}
                            </div>
                        </div> */}
                </div>
            </div>
        ) 
    } else {  return null }
}

export default LeadIndexItem
