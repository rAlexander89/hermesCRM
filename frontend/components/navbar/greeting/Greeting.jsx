import React from 'react'
import OptionsContainer from '../options/OptionsContainer'

function Greeting({currentUser, logout}) {

    const personalGreeting = () => (

        <div className='user-bar'>
            <div className='greeting-name'>
                Hello, {currentUser.first_name}.
            </div>
            <div className='logout-menu'>
                <p onClick={() => logout()}>Log Out</p>
            </div>
            {/* <OptionsContainer/> */}
            
        </div>
    )

    return currentUser ? personalGreeting() : null
}

export default Greeting
