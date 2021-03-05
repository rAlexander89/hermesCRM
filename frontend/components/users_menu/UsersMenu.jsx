import React, {useEffect, useRef} from 'react'
import { deleteUser, fetchUsers, fetchUser } from '../../actions/user_actions'
import CreateUserFormContainer from './create_user_form/CreateUserFormContainer'

function UsersMenu() {

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className='user-menu-container'>
            <CreateUserFormContainer/>
        </div>
    )
}

export default UsersMenu
