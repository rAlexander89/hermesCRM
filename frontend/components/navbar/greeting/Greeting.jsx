import React from 'react'
import MenuItemsContainer from '../../navbar/options/menu-items/MenuItemsContainer'
import OptionsContainer from '../options/OptionsContainer'

function Greeting({currentUser, logout}) {

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

    const personalGreeting = () => (
        <div className='user-bar'>
                <div onClick={toggleShow} className='greeting-name'>
                        Hello, {currentUser.first_name}.
                <MenuItemsContainer/>
            </div>
        </div>
    )

    return currentUser ? personalGreeting() : null;
}

export default Greeting
