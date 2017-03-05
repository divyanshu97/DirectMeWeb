import React from 'react'
import '../DockNow/CSS/DockNow.css'
import {browserHistory} from 'react-router'


const base_url = 'http://direct-me.herokuapp.com/'

const Dockings = React.createClass({

    getInitialState: function () {
        return {}
    },

    componentDidMount: function () {
        fetch(base_url + 'user/ships/',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
                }
            })
            .then(response => {
                return response.text()
            })
            .then(json => {
                let boats = JSON.parse(json)
                this.setState({
                    boats: boats,
                })
                for (var i = 0; i < this.state.boats.length; i++) {
                    if (boats[i].status === "Busy")
                        console.log(boats[i].username)
                }
                localStorage.setItem('ship_to_park', JSON.stringify(this.state.boats[this.state.i].id))
            }),
            function (err) {

            }
    },

    render: function () {
        return (
            <div>

            </div>
        )
    }
})

export default Dockings;