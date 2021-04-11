import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../actions/session_actions'

function Greeting() {

    const currentUser = useSelector((state => state.entities.users[state.session.currentUserId]))
    const dispatch = useDispatch()


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
                            
                    {/* <svg xmlns="http://www.w3.org/2000/svg" 
                        width="1em" 
                        height="1em"
                        viewBox="0 0 450 475"
                        onClick={() => dispatch(logout())}
                        >

                        <path d="M25.383,290.5c-7.2-77.5,25.9-147.7,80.8-192.3c21.4-17.4,53.4-2.5,53.4,25l0,0c0,10.1-4.8,19.4-12.6,25.7
                            c-38.9,31.7-62.3,81.7-56.6,136.9c7.4,71.9,65,130.1,136.8,138.1c93.7,10.5,173.3-62.9,173.3-154.5c0-48.6-22.5-92.1-57.6-120.6
                            c-7.8-6.3-12.5-15.6-12.5-25.6l0,0c0-27.2,31.5-42.6,52.7-25.6c50.2,40.5,82.4,102.4,82.4,171.8c0,126.9-107.8,229.2-236.7,219.9
                            C122.183,481.8,35.283,396.9,25.383,290.5z M244.883,0c-18,0-32.5,14.6-32.5,32.5v149.7c0,18,14.6,32.5,32.5,32.5
                            s32.5-14.6,32.5-32.5V32.5C277.383,14.6,262.883,0,244.883,0z"/>
                    </svg> */}
                </div>
    }

    return currentUser ? personalGreeting() : null;
}

export default Greeting
