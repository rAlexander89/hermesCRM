import React from 'react'
import CreateCommentContainer from '../../../../comments/create_comment/CreateCommentContainer'

function LeadShowContact({property_id}) {
    return (
        <div className='lead-show-contact-container'>
            <div className='lead-show-contact-header'>
                Agent Contact/Log
            </div>
            <div className='lead-show-contact-body'>
                <div className='lead-show-contact-data'>
                    <div className='lead-show-contact-name-email'>
                        <p>Tony Mark Johnson Stevens</p>
                        <p>TonyMarkjphnson@stevens.com</p>
                    </div>
                    <div>
                        213.965.4604
                    </div>

                </div>
                <div className='lead-show-contact-log'>
                    <CreateCommentContainer property_id={property_id}/>
                </div>
            </div>
            
        </div>
    )
}

export default LeadShowContact
