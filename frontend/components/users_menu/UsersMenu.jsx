import React, {useEffect, useRef} from 'react'
import { deleteUser, fetchUsers, fetchUser } from '../../actions/user_actions'
import ImportLeads from '../leads/leads_manager/ImportLeads'
import CreateUserForm from './create_user_form/CreateUserForm'

function UsersMenu() {

    useEffect(() => {
        fetchUsers()
    }, [])

    return  <div className='user-menu-container'>
                <ImportLeads/>
                <CreateUserForm/>
            </div>
}

export default UsersMenu
