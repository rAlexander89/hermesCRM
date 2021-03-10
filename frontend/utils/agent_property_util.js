import { $CombinedState } from "redux"

export const createAgentProperty = agent_property => {
    return $.ajax({
        url: '/api/agent_properties',
        method: 'POST',
        data: { agent_property }
    })
}

