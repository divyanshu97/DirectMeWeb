import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import SuperWorld from './SuperWorld'
import { Router, Route, browserHistory } from 'react-router'


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="SuperWorld" component={SuperWorld}/>
    </Router>
),document.getElementById('root'))