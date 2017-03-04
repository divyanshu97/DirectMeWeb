import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import SuperWorld from './SuperWorld'
import Profile from './Profile'
import ParkedOnMine from './ParkedOnMine'
import ParkNow from './ParkNow'
import IslandWorld from './IslandWorld.js'
import Island_Resdentials_List from './Island_Resdentials_List.js'
import ParkingDetails from './ParkingDetails'
import ShowRoom from './ShowRoom.js'
import ParkedMine from './ParkedMine.js'
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
        <Route path="parked-on-mine/" component={ParkedOnMine} onEnter={requireAuth}/>
        <Route path="parked-now/" component={ParkNow} onEnter={requireAuth}/>
        <Route path="island-world/" component={IslandWorld} onEnter={requireAuth}/>
        <Route path="island-residents/" component={Island_Resdentials_List} onEnter={requireAuth}/>
        <Route path="parking-details/" component={ParkingDetails} onEnter={requireAuth}/>
        <Route path="showroom/" component={ShowRoom} onEnter={requireAuth}/>
        <Route path="parked-mine/" component={ParkedMine} onEnter={requireAuth}/>
    </Router>
), document.getElementById('root'))
