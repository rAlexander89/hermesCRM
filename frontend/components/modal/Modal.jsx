import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CreateListing from '../users_menu//create_lead/CreateListing'
import { closeModal } from '../../actions/modal_actions'

function Modal({setFromModal}) {

    const showModal = useSelector((({ui}) => ui.modal))
    const dispatch = useDispatch()
    
    if (showModal){
        return  <div className='modal-background'>
                    <div className="modal-child">
                        <CreateListing setFromModal={setFromModal}/>
                    </div>
                </div>
    }

    return null
}

export default Modal
