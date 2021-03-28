import React, { useState, useEffect } from 'react'
import LeadsContainer from '../leads/leads_index/LeadsContainer'
import ImportLeadsContainer from '../leads/leads_manager/ImportLeadsContainer'

function Dashboard({pipeline, currentUser, fetchPipeline}) {
    const [selectedLead, setSelectedLead] = useState(false);
    const [selectPipeline, setSelectPipeline] = useState('Uncontacted')
    const [contacted, setContacted] = useState(false)
    const [watched, setWatched] = useState(false)
    const [listingStatus, setListingStatus] = useState(null)
    const [pipelineStatus, setPipelineStatus] = useState(null)
    

    useEffect(() => {
        fetchPipeline(selectPipeline)
    },[selectPipeline, contacted, listingStatus, pipelineStatus]);

    return (
        <div className='dashboard'>
            {/* <ImportLeadsContainer/> */}
            <LeadsContainer 
                setSelectedLead={setSelectedLead} 
                selectedLead={selectedLead}
                selectPipeline={selectPipeline}
                setSelectPipeline={setSelectPipeline}
                pipeline={pipeline}
                contacted={contacted}
                setContacted={setContacted}
                listingStatus={listingStatus}
                setListingStatus={setListingStatus}
                pipelineStatus={pipelineStatus}
                setPipelineStatus={setPipelineStatus}
                watched={watched}
                setWatched={setWatched}
                />
        </div>
    )
}

export default Dashboard
