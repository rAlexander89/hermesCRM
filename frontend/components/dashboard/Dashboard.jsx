import React from 'react'
import LeadsContainer from '../leads/leads_index/LeadsContainer'
import ImportLeadsContainer from '../leads/leads_manager/ImportLeadsContainer'

function Dashboard() {
    return (
        <div className='dashboard'>
            <ImportLeadsContainer/>
            <LeadsContainer/>
        </div>
    )
}

export default Dashboard
