import React, { useEffect, useState } from 'react'
import { Switch } from 'react-router-dom'
import LeadIndexItemContainer from '../leads_index_item/LeadIndexItemContainer'
import LeadShowContainer from '../leads_show/LeadShowContainer'
import { ProtectedRoute } from '../../../utils/route_util'


function Leads({fetchProperties, leads}) {
    const [selectedLead, setSelectedLead] = useState(null);

    useEffect(() => {
        fetchProperties();
    },[]);



    return (
        <div className='leads-container'>
            <div className='leads-header'>Leads</div>
            {/* <Switch> */}
                {/* <ProtectedRoute exact path='/properties/:propertyId' component={LeadShowContainer}/> */}
                <LeadShowContainer selectedLead={selectedLead} setSelectedLead={setSelectedLead}/>
            {/* </Switch> */}
            <div className="table-container">
                <div className="flex-table table-header">
                    <div className="flex-row" id='index'>#</div>
                    <div className="flex-row" id='submitted'>O</div>
                    <div className="flex-row" id='status'>S</div>
                    <div className="flex-row" id='o-l'>O-L</div>
                    <div className="flex-row" id='l-a'>L-A</div>
                    <div className="flex-row" id='offered'>Offered</div>
                    <div className="flex-row" id='list-price'>List Price</div>
                    <div className="flex-row" id='arv'>ARV</div>
                    <div className="flex-row" id='agent'>Agent</div>
                    <div className="flex-row" id='phone'>Phone</div>
                    <div className="flex-row" id='address'>Address</div>
                    <div className="flex-row" id='last-contact'>Last</div>
                </div>  
                {leads.map((lead, i) => (
                 <LeadIndexItemContainer
                    index={i}
                    lead={lead}
                    key={lead.id}
                    setSelectedLead={setSelectedLead}               
                    />
                ))}  
            </div>
        </div>
    )
}

export default Leads
