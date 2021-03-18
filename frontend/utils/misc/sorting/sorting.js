// sortLeads sorts all the leads into 
export const sortLeads = leads =>{
    let sorted = {
        unassigned: [],
        contacted: [],
        counterReceived: [],
        respondedToCounter: [],
        underContract: [],
        contingenciesRemoved: [],
        closed: []
    }

    Object.values(leads).forEach(lead => {
        let id = lead.id
        lead.contacted ? sorted.contacted.push({id: lead}) : null

        switch(lead.pipeline){
            case('Unassigned'):
                lead.contacted ? null : sorted.unassigned.push({id: lead});
                break
            case('Counter Received'):
                sorted.counterReceived.push({id: lead});
                break
            case('Responded To Counter'):
                sorted.respondedToCounter.push({id: lead});
                break
            case('Under Contract'):
                sorted.underContract.push({id: lead});
                break
            case('Contingencies Removed'):
                sorted.respondedToCounter.push({id: lead});
                break
            case('Closed'):
                sorted.closed.push({id: lead});
                break
            default:
                return sorted;
        }
    })

    return sorted

}