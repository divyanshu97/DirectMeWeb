import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import SuperWorld from './SuperWorld'
import Profile from './Profile'
import ParkedOnMine from './ParkedOnMine'
import {Router, Route, browserHistory} from 'react-router'


function loggedIn() {
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token)
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
    </Router>
),document.getElementById('root'))