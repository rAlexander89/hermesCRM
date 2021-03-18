import React, { useState } from 'react'
import LeadsContainer from '../leads/leads_index/LeadsContainer'
import ImportLeadsContainer from '../leads/leads_manager/ImportLeadsContainer'

function Dashboard() {
    const [selectedLead, setSelectedLead] = useState(null);

    return (
        <div className='dashboard'>
            <ImportLeadsContainer/>
            <LeadsContainer setSelectedLead={setSelectedLead} selectedLead={selectedLead}/>
        </div>
    )
}

export default Dashboard
