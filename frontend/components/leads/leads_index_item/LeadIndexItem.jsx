import React, {useEffect, useState} from 'react'
import {fetchAgentByLicense} from '../../../utils/api/agent_api_utils'
import { fetchProperty } from '../../../utils/api/property_api_util'
import {addComma, offerDate, truncDigits, truncStatus, formatContact, updateDate} from '../../../utils/misc/formatting/formatting'


function LeadIndexItem({lead, index, setSelectedLead}) {

    const [agent, setAgent] = useState(false);
    const [property, setProperty] = useState(false);
    
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


    
    const showThisLead = (e, property, lead, agent, setSelectedLead) => {
        e.preventDefault();
        
        const showData = {
            property_id: property.id, 
            agent: agent,
            pipeline: lead
        }
        setSelectedLead(showData)
    }


    if (agent){
        return(
            <div className={`lead-index-item x${index}`} onDoubleClick={e => showThisLead(e, property, lead, agent, setSelectedLead)}>
                <div className="flex-row" id='index'>{index + 1}</div>
                <div className="flex-row" id='submitted'>{offerDate(property.offer_date_dash)}</div>
                {/* <div className="flex-row" id='status'>{truncStatus(lead.listing_status)}</div> */}
                {/* <div className="flex-row" id='o-l'>{truncDigits(property.list_offer)}</div> */}
                {/* <div className="flex-row" id='l-a'>{truncDigits(property.list_arv)}</div> */}
                {/* <div className="flex-row" id='offered'>{property.offer}</div>
                <div className="flex-row" id='list-price'>{addComma(property.list_price)}</div>
                <div className="flex-row" id='arv'>{addComma(property.arv)}</div> */}
                {/* <div className="flex-row" id='agent-name'>{agent.agent_first} {agent.agent_last}</div> */}
                {/* <div className="flex-row" id='phone'>{formatContact(agent.agent_contact)}</div> */}
                <div className="flex-row" id='address'> {property.address}</div>
                {/* <div className="flex-row" id='agent-name'> N/A </div> */}
                <div className="flex-row" id='last-contact'> {updateDate(property.updated_at)} </div>
            </div>
        ) 
    } else {  return null }
}

export default LeadIndexItem
