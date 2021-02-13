import React from 'react'
import { Switch } from 'react-router-dom'

import { AuthRoute, ProtectedRoute } from '../utils/route_util'

import NavBarContainer from './navbar/NavBarContainer'
import SplashContainer from './splash/SplashContainer'
import DashboardContainer from './dashboard/DashboardContainer'


function App() {
    
    return (
        <div className='app-container'>
            <div className='nav-container'>
                <NavBarContainer/>
            </div>
            <div className='content-display'>
                <Switch>
                    <AuthRoute exact path ='/' component={SplashContainer}/>
                    <ProtectedRoute exact path='/dash' component={DashboardContainer}/>
                </Switch>
            </div>
        </div>
    )
}

export default App
