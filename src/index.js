import React from 'react'
import ReactDOM from 'react-dom'

import Login from './Login/Login'
import SuperWorld from './SuperWorld/SuperWorld'
import Profile from './Profile/Profile'
import Harbour from './Harbour/Harbour'
import DockNow from './DockNow/DockNow'
import IslandWorld from './Commons/IslandWorld.js'
import Residents from './DockNow/Residents.js'
import ParkingDetails from './Commons/ParkingDetails'
import ShowRoom from './Showroom/Showroom.js'
import Dockings from './Dockings/Dockings.js'
import {Router, Route, browserHistory} from 'react-router'


function loggedIn() {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token)
        return true
    else
        return false
}

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/'
        })
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="superworld/" component={SuperWorld} onEnter={requireAuth}/>
        <Route path="profile/" component={Profile} onEnter={requireAuth}/>
        <Route path="parked-on-mine/" component={Harbour} onEnter={requireAuth}/>
        <Route path="dock-now/" component={DockNow} onEnter={requireAuth}/>
        <Route path="island-world/" component={IslandWorld} onEnter={requireAuth}/>
        <Route path="island-residents/" component={Residents} onEnter={requireAuth}/>
        <Route path="parking-details/" component={ParkingDetails} onEnter={requireAuth}/>
        <Route path="showroom/" component={ShowRoom} onEnter={requireAuth}/>
        <Route path="dockings/" component={Dockings} onEnter={requireAuth}/>
    </Router>
), document.getElementById('root'))
