import React from 'react'
import FinalDockButton from '../DockNow/FinalDockButton'

const base_url = 'http://direct-me.herokuapp.com/'
const ParkingDetails = React.createClass({
    getInitialState: function () {
        return {
            port_list: []
        }
    },
    componentWillMount: function () {
        let self = this
        fetch(base_url + 'core/ports/' + JSON.parse(sessionStorage.getItem('resedential_id')) + '/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
            }
        }).then(function (response) {
            return response.json()
        }).then(function (json) {
            let data = []
            for (let i in json) {
                let port = json[i]
                if (port.logs.length) {
                    data.push({
                        port_type: port.type,
                        port_id: port.id,
                        user_name: port.logs[0].username,
                        user_id: port.logs[0].user_id,
                        ship_image: port.logs[0].ship_image,
                        ship_id: port.logs[0].ship
                    })
                }
                else {
                    data.push({
                        port_type: port.type,
                        port_id: port.id,
                        ship_id: 0
                    })
                }
            }
            self.setState({
                port_list: data
            })
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },

    render: function () {
        return (
            <div>
                {
                    this.state.port_list.map((port, i) => {
                        return (
                            <div>
                                <p> Type: {port.port_type} </p>
                                <p> {port.user_name} </p>
                                <p> {port.user_id} </p>
                                <img style={{height: 200, width: 200}} src={port.ship_image}/>
                                <FinalDockButton port_id={port.port_id} show={port.ship_id != 0 }/>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
})

export default ParkingDetails;