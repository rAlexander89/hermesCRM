import React from 'react'
import { Link } from 'react-router-dom'

function MenuItems({logout}) {
    return (
        <div id="myDropdown" className="dropdown-content">
            <p className='dropdown-item'><Link to='/user-menu'>User Menu</Link></p>
            <p className='dropdown-item' onClick={() => logout()}>Log Out</p>
        </div>
    )
}

export default MenuItems
