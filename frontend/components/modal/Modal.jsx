import React from 'react'
import { useSelector } from 'react-redux'
import CreateListing from '../users_menu/CreateListing'
import { closeButton } from '../misc/svgs'

function Modal() {

    const showModal = useSelector((({ui}) => ui.modal))
    
    if (showModal){
        return  <div className='modal-background'>
                    <div className="modal-child">
                        <CreateListing/>
                    </div>
                </div>
    }

    return null
}

export default Modal
