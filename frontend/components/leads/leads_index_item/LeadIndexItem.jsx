import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'


function LeadIndexItem({lead, index, setSelectedLead, fetchAgentByListingId, agent}) {

    useEffect(() => {
        fetchAgentByListingId(lead.listing_id)

    }, [lead.listing_id])


    const history = useHistory()


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
    
    const showThisLead = (e, lead, setSelectedLead) => {
        e.preventDefault();
        setSelectedLead(lead)
    }



    return (
        <div className={`lead-index-item x${index}`} onDoubleClick={e => showThisLead(e, lead, setSelectedLead)}>
            <div className="flex-row" id='index'>{index + 1}</div>
            <div className="flex-row" id='submitted'>{offerDate(lead.offer_date_dash)}</div>
            <div className="flex-row" id='status'>{truncStatus(lead.status)}</div>
            <div className="flex-row" id='o-l'>{truncDigits(lead.list_offer)}</div>
            <div className="flex-row" id='l-a'>{truncDigits(lead.list_arv)}</div>
            <div className="flex-row" id='offered'>{lead.offer}</div>
            <div className="flex-row" id='list-price'>{addComma(lead.list_price)}</div>
            <div className="flex-row" id='arv'>{addComma(lead.arv)}</div>
            <div className="flex-row" id='agent'>Tony Mark Johnson Stevens</div>
            <div className="flex-row" id='phone'>323.215.3641</div>
            <div className="flex-row" id='address'> {lead.address}</div>
            <div className="flex-row" id='last-contact'> 4.25.20 </div>
        </div>
    )
}

export default LeadIndexItem
