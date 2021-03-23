import React, {useEffect, useRef} from 'react'
import { deleteUser, fetchUsers, fetchUser } from '../../actions/user_actions'
import ImportLeadsContainer from '../leads/leads_manager/ImportLeadsContainer'
import CreateUserFormContainer from './create_user_form/CreateUserFormContainer'

function UsersMenu() {

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className='user-menu-container'>
            <ImportLeadsContainer/>
            {/* <CreateUserFormContainer/> */}
        </div>
    )
}

export default UsersMenu
