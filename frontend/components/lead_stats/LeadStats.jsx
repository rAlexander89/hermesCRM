import React, { useContext, useEffect, useState } from 'react'
import { LeadsPipelineContext } from '../dashboard/Dashboard'
import { fetchPipeline } from '../../utils/api/pipeline_api_utils'
import { sortStats } from '../../utils/misc/sorting/sorters'


function LeadStats() {

    let ctx = useContext(LeadsPipelineContext)
    const [stats, setStats] = useState(false)

    useEffect(() => {
        fetchPipeline()
            .then(res => {
                setStats(sortStats(res))
        })
    }, [ctx])


    return <div className='lead-stats-container'>
                hello
            </div>
}

export default LeadStats
