import React from 'react'
import CreateCommentContainer from '../../../../comments/create_comment/CreateCommentContainer'
import ShowPropertyCommentsContainer from '../../../../comments/show_comment/ShowPropertyCommentsContainer'

function LeadShowContact({property_id, agent}) {

    function formatContact(num){
        let number = num.replaceAll(' ','').replaceAll('-','.').replace('(','').replace(')','')
        return number
    }

    if (property_id){
        return (
            <div className='lead-show-contact-container'>
                <div className='agent-contact-container'>
                    <div className='lead-show-contact-header'>
                        Agent Contact
                    </div>
                    <div className='lead-show-contact-body'>
                        <div className='lead-show-contact-data'>
                            <div className='lead-show-contact-name-email'>
                                <p>{agent.agent_first} {agent.agent_last}</p>
                                <p>{agent.agent_email}</p>
                            </div>
                            <div>
                                {formatContact(agent.agent_contact)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-log-container'>
                    <div className='lead-show-contact-header'>
                        Contact Log
                    </div>
                    <div className='lead-show-contact-log'>
                        <ShowPropertyCommentsContainer property_id={property_id}/>
                        <CreateCommentContainer property_id={property_id}/>
                    </div>
                </div>
            </div>
        )
    }


}

export default LeadShowContact
