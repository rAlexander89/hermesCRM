import React from 'react'
import { Link } from 'react-router-dom'
import GreetingContainer from './greeting/GreetingContainer'
import MenuItemsContainer from './options/menu-items/MenuItemsContainer'

function NavBar({}) {



    return (

        <div className='nav-bar'>
            <div className='header'>
                <div className='logo'>
                    <h2>Flipping Unleashed</h2>
                </div>
                <div className='user-session'>
                    <GreetingContainer/>
                </div>
            </div>
        </div>

    )
}

export default NavBar
