import React from 'react'
import { useSelector } from 'react-redux'

function Greeting() {

    const currentUser = useSelector((state => state.entities.users[state.session.currentUserId]))


    function toggleShow() {
        document.getElementById("menuDropdown-Nav").classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('.greeting-name')) {
            
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    const personalGreeting = () => {
        return  <div className='user-bar'>
                    <div onClick={toggleShow} className='greeting-name'>
                            Hello, {currentUser.first_name}.
                    </div>
                </div>
    }

    return currentUser ? personalGreeting() : null;
}

export default Greeting
