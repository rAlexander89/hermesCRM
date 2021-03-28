import React, { useContext } from 'react'
import CreateCommentContainer from '../../../../comments/create_comment/CreateCommentContainer'
import ShowPropertyCommentsContainer from '../../../../comments/show_comment/ShowPropertyCommentsContainer'
import { formatContact } from '../../../../../utils/misc/formatting/formatting'
import { LeadsPipelineContext } from '../../../../dashboard/Dashboard'

function LeadShowContact({property_id, agent}) {

    let ctx = useContext(LeadsPipelineContext)

    if (ctx.selectedLead.property_id){
        return (
            <div className='lead-show-contact-container'>
                <div className='agent-contact-container'>
                    <div className='lead-show-contact-header'>
                        Agent Contact
                    </div>
                    <div className='lead-show-contact-body'>
                        <div className='lead-show-contact-data'>
                            <div className='lead-show-contact-name-email'>
                                <p>{ctx.selectedLead.agent.agent_first} {ctx.selectedLead.agent.agent_last}</p>
                                <p>{ctx.selectedLead.agent.agent_email}</p>
                            </div>
                            <div>
                                {formatContact(ctx.selectedLead.agent.agent_contact)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-log-container'>
                    <div className='lead-show-contact-header'>
                        Contact Log
                    </div>
                    <div className='lead-show-contact-log'>
                        <ShowPropertyCommentsContainer property_id={ctx.selectedLead.property_id}/>
                        <CreateCommentContainer property_id={ctx.selectedLead.property_id}/>
                    </div>
                </div>
            </div>
        )
    }


}

export default LeadShowContact
