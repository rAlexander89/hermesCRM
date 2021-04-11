import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'

function Modal() {

    const dispatch = useDispatch()
    const showModal = useSelector((({ui}) => ui.modal))
    
    if (showModal){
        return  <div className='modal-background'>
                    <div className="modal-child">
                        hi
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        hi
                    </div>
                </div>
    }

    return null
}

export default Modal
