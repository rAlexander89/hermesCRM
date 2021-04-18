import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import CreateListing from '../users_menu/CreateListing'

function Modal() {

    const dispatch = useDispatch()
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
