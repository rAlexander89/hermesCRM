import React from 'react'
import { Link } from 'react-router-dom'
import GreetingContainer from './greeting/GreetingContainer'

function NavBar({}) {

    return (
        <div className='nav-bar'>
            <div className='header'>
                <div className='logo'>
                    <h2><Link to='/dash'>Flipping Unleashed</Link></h2>
                </div>
                <div className='user-session'>
                    <GreetingContainer/>
                </div>
            </div>
        </div>

    )
}

export default NavBar
