import React from 'react'
import ReactDOM from 'react-dom'
import FineButton from './FineUser'

const base_url = "http://direct-me.herokuapp.com/"
let ParkedOnMine = React.createClass({

    getInitialState(){
        return {
            port_list: []
        }
    },
    componentDidMount(){
        let self = this
        fetch(base_url + 'core/ports/' + JSON.parse(localStorage.getItem('user_id')) + '/', {
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
                        is_vacant: 0
                    })
                }
                else {
                    data.push({
                        port_type: port.type,
                        port_id: port.id,
                        is_vacant: 1
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
    render() {
        return (
            <div>
                {
                    this.state.port_list.map((port, i) => {
                        return (
                            <div>
                                <p> {port.port_type} </p>
                                <p> {port.port_id} </p>
                                <p> {port.user_name} </p>
                                <p> {port.user_id} </p>
                                <img style={{height: 200, width: 200}} src={port.ship_image}/>
                                <FineButton port_id={port.port_id}
                                            show={port.port_type == "Parking" || (port.is_vacant && port.port_type == "Non Parking")}/>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
})
export default ParkedOnMine
