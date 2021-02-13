import React from 'react'

function Options({logout}) {
    return (
        <div className='options'>
            <label for='toggle'>&#9776;</label>
            <input type='checkbox' id='toggle'/>


            <div class='menu-dropdown'>
                <div className='communications-menu'>
                    Communications
                </div>
                <div className='logout-menu'>
                    <p onClick={() => logout()}>Log Out</p>
                </div>
            </div>
        </div>
    )
}

export default Options
