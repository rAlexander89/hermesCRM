import React, { useContext } from 'react'
import CreateComment from '../../../../comments/create_comment/CreateCommentForm'
import ShowPropertyComments from '../../../../comments/show_comment/ShowPropertyComments'
import { formatContact } from '../../../../../utils/misc/formatting/formatting'
import { LeadsPipelineContext } from '../../../../dashboard/Dashboard'

function LeadShowContact() {

    let ctx = useContext(LeadsPipelineContext)

    if (ctx.selectedLead.property_id){
        return  <div className='lead-show-contact-container'>
                    <div className='agent-contact-container'>
                        <div className='lead-show-contact-header'>
                            <h2 className='card-title'>Agent Contact</h2>
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
                            <h2 className='card-title'>Contact Log</h2>
                        </div>
                        <div className='lead-show-contact-log'>
                            <ShowPropertyComments/>
                            <CreateComment/>
                        </div>
                    </div>
                </div>
    }


}

export default LeadShowContact
