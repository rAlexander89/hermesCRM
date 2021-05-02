import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPipeline } from '../../actions/pipeline_actions'
import Leads from '../leads/leads_index/Leads'
import LeadStats from '../lead_stats/LeadStats'
import LeadShow from '../leads/leads_show/LeadShow'
import LeadsSelector from '../leads/leads_selector/LeadsSelector'
import { newLeadCycle } from '../../utils/misc/functionality/api_functionality'

export const LeadsPipelineContext = React.createContext()

function Dashboard() {

    const [selectedLead, setSelectedLead] = useState(false);
    const [selectPipeline, setSelectPipeline] = useState('Uncontacted')
    const [contacted, setContacted] = useState(false)
    const [watched, setWatched] = useState(false)
    const [listingStatus, setListingStatus] = useState(null)
    const [pipelineStatus, setPipelineStatus] = useState(null)

    const lead = useSelector(state => state.entities.leads)
    const pipeline = useSelector((state => state.entities.pipeline))
    debugger
    const currentUser = useSelector((state => state.entities.users[state.session.currentUserId]))

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchPipeline(selectPipeline))
    },[selectPipeline, contacted, listingStatus, pipelineStatus]);

    useEffect(() => {
        newLeadCycle(lead, setSelectedLead, dispatch, fetchPipeline, selectPipeline )
    }, [lead])

        let ctx = {
        currentUser: currentUser,
        pipeline: 
            Object.values(pipeline).length !== 0 ? 
            Object.values(pipeline).reverse() : false,
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



    return  <LeadsPipelineContext.Provider value={ctx}>
                <LeadsSelector/>
                <div className='leads-dash'>
                    <LeadStats/>
                    <LeadShow />
                    <Leads/>
                </div>
            </LeadsPipelineContext.Provider>
}

export default Dashboard
