import React from 'react'
import '../DockNow/CSS/DockNow.css'
import {browserHistory} from 'react-router'
import Undock from './Undock.js'


const base_url = 'http://direct-me.herokuapp.com/'

const Dockings = React.createClass({

    getInitialState: function () {
        return {
            boats_details: []
        }
    },

    componentDidMount: function () {
        let self = this
        fetch(base_url + 'user/ships/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
            }
        }).then(function (response) {
            return response.json()
        }).then(function (json) {
            console.log(json)

            let data = []
            for (let i in json) {
                let boat = json[i]
                if (boat.island_id) {
                    data.push({
                        id: boat.id,
                        island_id: boat.island_id,
                        port_id: boat.port_id,
                        username: boat.username,
                        ship_name: boat.name,
                        ship_image: boat.ship_image
                    })
                }
            }
            self.setState({
                boats_details: data
            })
            console.log(self.state.boats_details)

        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },

    render: function () {
        return (
            <div>
                {
                    this.state.boats_details.map((boat, i) => {
                        return (
                            <div>
                                <p> Island : {boat.island_id} </p>
                                <p> Port: {boat.port_id} </p>
                                <p> Parked on: {boat.username} </p>
                                <p> Ship Name:{boat.ship_name} </p>
                                <img style={{height: 200, width: 200}} src={boat.ship_image}/>
                                <Undock id={boat.id}/>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
})

export default Dockings;