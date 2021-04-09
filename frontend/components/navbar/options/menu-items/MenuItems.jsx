import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../../actions/session_actions'

function MenuItems() {
    
    const dispatch = useDispatch()
    
    return (
        <div id="menuDropdown-Nav" className="dropdown-content">
            <p className='dropdown-item'><Link to='/user-menu'>User Menu</Link></p>
            <p className='dropdown-item' onClick={() => dispatch(logout())}>Log Out</p>
        </div>
    )
}

export default MenuItems
