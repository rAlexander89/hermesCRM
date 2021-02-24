import React from 'react'
import LeadShowCommentInputContainer from '../lead_show_contact/lead_show_comment_input/LeadShowCommentInputContainer'

function LeadShowContact() {
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
                    <LeadShowCommentInputContainer/>
                </div>
            </div>
            
        </div>
    )
}

export default LeadShowContact
