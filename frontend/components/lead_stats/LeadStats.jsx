import React, { useContext, useEffect, useState } from 'react'
import { LeadsPipelineContext } from '../dashboard/Dashboard'
import { fetchLeadStats } from '../../utils/api/pipeline_api_utils'


function LeadStats() {

    let ctx = useContext(LeadsPipelineContext)
    const [stats, setStats] = useState(false)

    useEffect(() => {
        fetchLeadStats()
            .then(res => {
                setStats(res)
        })
    }, [ctx])

    if(stats){
        return <div className='lead-stats-container'>
                    <div className='stats-container'>
                        <div className={`c100 p${stats.contacted}`}>
                            <span><h1>{`${stats.contacted}`}%</h1></span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <h1 className='graph-desc'>Contacted/</h1>
                        <h1 className='graph-desc'>Uncontacted</h1>
                    </div>
                    <div className='stats-container'>
                        <div className={`c100 p${stats.countersReceived}`}>
                            <span><h1>{`${stats.countersReceived}`}%</h1></span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <h1 className='graph-desc'>Counters Received/</h1>
                        <h1 className='graph-desc'>Contacted</h1>
                    </div>
                    <div className='stats-container'>
                        <div className={`c100 p${stats.countersResponded}`}>
                            <span><h1>{`${stats.countersResponded}`}%</h1></span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <h1 className='graph-desc'>Counters Responded/</h1>
                        <h1 className='graph-desc'>Counters Received</h1>
                    </div>
                    <div className='stats-container'>
                        <div className={`c100 p${stats.underContract}`}>
                            <span><h1>{`${stats.underContract}`}%</h1></span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <h1 className='graph-desc'>Under Contract/</h1>
                        <h1 className='graph-desc'>Counters Responded</h1>
                    </div>
                    <div className='stats-container'>
                        <div className={`c100 p${stats.closed}`}>
                            <span><h1>{`${stats.closed}`}%</h1></span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <h1 className='graph-desc'>Closed/</h1>
                        <h1 className='graph-desc'>Under Contract</h1>
                    </div>
                </div>
    } else { return null }
}

export default LeadStats
