import React from 'react'
import { Link } from 'react-router-dom'
import Greeting from './greeting/Greeting'

function NavBar({}) {

    return(
        <>
            <div className='header-container'>
                <h2 className='logo'><Link to='/dash'>Hermes CRM</Link></h2>
                <div className='user-session'>
                            <Greeting/>
                </div>
            </div>
        </>
    )     
}

export default NavBar
