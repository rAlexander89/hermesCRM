import React from 'react'
import { Link } from 'react-router-dom'
import GreetingContainer from './greeting/GreetingContainer'

function NavBar({}) {

    return(
        <>
            <div className='header-container'>
                <h2 className='logo'><Link to='/dash'>Hermes CRM</Link></h2>
                <div className='user-session'>
                            <GreetingContainer/>
                </div>
            </div>
        </>
    )     
}

export default NavBar
