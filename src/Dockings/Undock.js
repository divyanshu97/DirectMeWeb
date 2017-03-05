import React from 'react'
import {browserHistory} from 'react-router'

let base_url = 'http://direct-me.herokuapp.com/'

let Undock = React.createClass({
    handleClick(e)
    {
        let self = this
        fetch(base_url + 'core/undock/', {
            method: 'POST',
            body: JSON.stringify({ship_id: e.target.id}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
            }
        }).then(function (response) {
            return response.json()
        }).then(function (json) {
            browserHistory.push('/superworld/')
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },
    render(){
        return (
            <div>
                <button id={this.props.id} onClick={this.handleClick}>Undock</button>
            </div>
        )
    }
})

export default Undock;