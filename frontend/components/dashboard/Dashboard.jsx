import React, { useState, useEffect } from 'react'
import Leads from '../leads/leads_index/Leads'

export const LeadsPipelineContext = React.createContext()

function Dashboard({pipeline, currentUser, fetchPipeline}) {
    const [selectedLead, setSelectedLead] = useState(false);
    const [selectPipeline, setSelectPipeline] = useState('Uncontacted')
    const [contacted, setContacted] = useState(false)
    const [watched, setWatched] = useState(false)
    const [listingStatus, setListingStatus] = useState(null)
    const [pipelineStatus, setPipelineStatus] = useState(null)

    let ctx = {
        currentUser: currentUser,
        pipeline: pipeline,
        selectedLead: selectedLead,
        setSelectedLead: setSelectedLead,
        selectPipeline, setSelectPipeline,
        contacted: contacted,
        setContacted: setContacted,
        watched: watched,
        setWatched: setWatched,
        listingStatus: listingStatus,
        setListingStatus: setListingStatus,
        pipelineStatus: pipelineStatus,
        setPipelineStatus: setPipelineStatus
    }
    
    useEffect(() => {
        fetchPipeline(selectPipeline)
    },[selectPipeline, contacted, listingStatus, pipelineStatus]);

    return (
        <LeadsPipelineContext.Provider value={ctx}>
            <div className='dashboard'>
                <Leads/>
            </div>
        </LeadsPipelineContext.Provider>
    )
}

export default Dashboard
