import React, { useState, useEffect } from 'react'
import LeadsContainer from '../leads/leads_index/LeadsContainer'
import ImportLeadsContainer from '../leads/leads_manager/ImportLeadsContainer'

function Dashboard({pipeline, currentUser, fetchPipeline}) {
    const [selectedLead, setSelectedLead] = useState(false);
    const [selectPipeline, setSelectPipeline] = useState('Unassigned')
    const [contacted, setContacted] = useState(false)
    

    useEffect(() => {
        fetchPipeline(selectPipeline)
    },[selectPipeline, contacted]);

    return (
        <div className='dashboard'>
            <ImportLeadsContainer/>
            <LeadsContainer 
                setSelectedLead={setSelectedLead} 
                selectedLead={selectedLead}
                selectPipeline={selectPipeline}
                setSelectPipeline={setSelectPipeline}
                pipeline={pipeline}
                contacted={contacted}
                setContacted={setContacted}
                />
        </div>
    )
}

export default Dashboard
