import React from 'react'
import {browserHistory} from 'react-router'

const base_url = 'http://direct-me.herokuapp.com/'
let FinalDockButton = React.createClass({

    componentDidMount() {

    },
    handleClick(e) {
        let self = this
        fetch(base_url + 'core/dock/', {
            method: 'POST',
            body: JSON.stringify({ship_id: sessionStorage.getItem('ship_to_park'), port_id: this.props.port_id}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
            }
        }).then(function (response) {
            return response.json()
        }).then(function (json) {
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },

    render(){
        return (
            <div>
                <button disabled={this.props.show} onClick={this.handleClick}>Dock</button>
            </div>
        )
    }
})

export default FinalDockButton