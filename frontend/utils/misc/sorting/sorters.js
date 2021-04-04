import { floatToPerc, floatToPercTotal } from '../formatting/formatting'

export const sortStats = pipelines => {

    let contacted = 0
    let total = pipelines.length
    let countersReceived = 0
    let countersResponded = 0
    let underContract = 0
    let contingenciesRemoved = 0
    let closed = 0

    pipelines.forEach((pipe) => {
        if (pipe.contacted) contacted += 1
        switch(pipe.pipeline_status){
            case 'Counter Received':
                countersReceived += 1;
                break
            case 'Counter Responded':
                countersResponded += 1
                break
            case 'Under Contract':
                underContract += 1;
                break
            case 'Closed':
                closed += 1;
        }
    })


    let stats = {
        contacted: floatToPercTotal(contacted,total),
        countersReceived: floatToPerc(countersReceived,contacted),
        counterResponded: floatToPerc(countersResponded,countersReceived),
        underContract: floatToPerc(underContract,countersResponded),
        closed: floatToPerc(closed,underContract)            
    }

    return stats
}