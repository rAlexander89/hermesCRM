import React from 'react'
import { useSelector } from 'react-redux'
import MenuItems from '../../navbar/options/menu-items/MenuItems'

function Greeting() {

    const currentUser = useSelector((state => state.entities.users[state.session.currentUserId]))

    function toggleShow() {
        document.getElementById("menuDropdown-Nav").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
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
                            <MenuItems/>
                    </div>
                </div>
    }

    return currentUser ? personalGreeting() : null;
}

export default Greeting
