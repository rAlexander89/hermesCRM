import React from 'react'

function MenuItems({logout}) {
    return (
        <div class='menu-dropdown'>
            <div className='communications-menu'>
                Communications
            </div>
            <div className='logout-menu'>
                <p onClick={() => logout()}>Log Out</p>
            </div>
        </div>
    )
}

export default MenuItems
