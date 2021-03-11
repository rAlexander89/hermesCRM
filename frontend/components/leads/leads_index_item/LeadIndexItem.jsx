import React, {useEffect, useState} from 'react'
import {fetchAgentByLicense} from '../../../utils/agent_api_utils'


function LeadIndexItem({lead, index, setSelectedLead}) {
    const [agent, setAgent] = useState(false);
    
    useEffect(() => {
        fetchAgentByLicense(lead.agent_id)
            .then(res => setAgent(res))     
    }, [lead.agent_id])


    function addComma(num){
         return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function offerDate(date){
        return date.replace(/\//g,'.');
    }

    function truncDigits(num){
        return num.substring(0,4)
    }

    function truncStatus(status){
        let acronym = status.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
        return acronym
    }
    
    const showThisLead = (e, lead, agent, setSelectedLead) => {
        e.preventDefault();
        
        const showData = {
            lead: lead, 
            agent:agent
        }

        setSelectedLead(showData)
    }


    function formatContact(num){
        let number = num.replaceAll(' ','').replaceAll('-','.').replace('(','').replace(')','')
        return number
    }

    if (agent){
        return (
            <div className={`lead-index-item x${index}`} onDoubleClick={e => showThisLead(e, lead, agent, setSelectedLead)}>
                <div className="flex-row" id='index'>{index + 1}</div>
                <div className="flex-row" id='submitted'>{offerDate(lead.offer_date_dash)}</div>
                <div className="flex-row" id='status'>{truncStatus(lead.status)}</div>
                <div className="flex-row" id='o-l'>{truncDigits(lead.list_offer)}</div>
                <div className="flex-row" id='l-a'>{truncDigits(lead.list_arv)}</div>
                <div className="flex-row" id='offered'>{lead.offer}</div>
                <div className="flex-row" id='list-price'>{addComma(lead.list_price)}</div>
                <div className="flex-row" id='arv'>{addComma(lead.arv)}</div>
                <div className="flex-row" id='agent'>{agent.agent_first} {agent.agent_last}</div>
                <div className="flex-row" id='phone'>{formatContact(agent.agent_contact)}</div>
                <div className="flex-row" id='address'> {lead.address}</div>
                <div className="flex-row" id='last-contact'> 4.25.20 </div>
            </div>
        ) 
    } else { 
        return null
    }

}

export default LeadIndexItem
