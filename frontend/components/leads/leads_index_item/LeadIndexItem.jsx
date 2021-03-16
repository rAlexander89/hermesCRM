import React, {useEffect, useState} from 'react'
import {fetchAgentByLicense} from '../../../utils/api/agent_api_utils'
import {addComma, offerDate, truncDigits, truncStatus, formatContact, updateDate} from '../../../utils/misc/formatting/formatting'


function LeadIndexItem({lead, index, setSelectedLead}) {
    const [agent, setAgent] = useState(false);
    
    useEffect(() => {
        fetchAgentByLicense(lead.agent_id)
            .then(res => setAgent(res))     
    }, [lead.agent_id])


    
    const showThisLead = (e, lead, agent, setSelectedLead) => {
        e.preventDefault();
        
        const showData = {
            property_id: lead.id, 
            agent: agent
        }
        setSelectedLead(showData)
    }

    if (agent){
        return(
            <div className={`lead-index-item x${index}`} onDoubleClick={e => showThisLead(e, lead, agent, setSelectedLead)}>
                <div className="flex-row" id='index'>{index + 1}</div>
                <div className="flex-row" id='submitted'>{offerDate(lead.offer_date_dash)}</div>
                <div className="flex-row" id='status'>{truncStatus(lead.status)}</div>
                <div className="flex-row" id='o-l'>{truncDigits(lead.list_offer)}</div>
                <div className="flex-row" id='l-a'>{truncDigits(lead.list_arv)}</div>
                <div className="flex-row" id='offered'>{lead.offer}</div>
                <div className="flex-row" id='list-price'>{addComma(lead.list_price)}</div>
                <div className="flex-row" id='arv'>{addComma(lead.arv)}</div>
                <div className="flex-row" id='agent-name'>{agent.agent_first} {agent.agent_last}</div>
                <div className="flex-row" id='phone'>{formatContact(agent.agent_contact)}</div>
                <div className="flex-row" id='address'> {lead.address}</div>
                <div className="flex-row" id='last-contact'> {updateDate(lead.updated_at)} </div>
            </div>
        ) 
    } else { 
        return null
    }
}

export default LeadIndexItem
