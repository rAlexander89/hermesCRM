import React from 'react'
import { Switch } from 'react-router-dom'

import { AuthRoute, ProtectedRoute } from '../utils/route_util'

import NavBar from './navbar/NavBar'
import Splash from './splash/Splash'
import Dashboard from './dashboard/Dashboard'
import UserMenu from './users_menu/UsersMenu'
import Modal from './modal/Modal'

function App() {


    return <div className='app-container'>
                <NavBar/>
                <div className='content-display'>
                    <Switch>
                        <AuthRoute exact path ='/' component={Splash}/>
                        <ProtectedRoute exact path='/dash' component={Dashboard} />
                        <ProtectedRoute exact path='/user-menu' component={UserMenu} />
                    </Switch>
                </div>
                <Modal/>
            </div>
}

export default App
