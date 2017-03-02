import React from 'react'
import ReactDOM from 'react-dom'
import FineButton from './FineUser'

const base_url="http://direct-me.herokuapp.com/"
let ParkedOnMine = React.createClass({

    getInitialState(){
        return {
            user_list: []
        }
    },
    componentDidMount(){
        let self = this
        fetch(base_url+'core/ports/' + JSON.parse(localStorage.getItem('user_id')) + '/', {
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
                        type: port.type,
                        id: port.id,
                        user_name: port.logs[0].username,
                        user_id: port.logs[0].user_id,
                        ship_image: base_url + port.logs[0].ship_image,
                        vacant: 0
                    })
                }
                else {
                    data.push({
                        type: port.type,
                        id: port.id,
                        vacant: 1
                    })
                }
            }
            self.setState({
                user_list: data
            })
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },
    render() {
        return (
            <div>
                {
                    this.state.user_list.map((port,i) => {
                        return (
                            <div>
                                <p> {port.type} </p>
                                <p> {port.id} </p>
                                <p> {port.user_name} </p>
                                <p> {port.user_id} </p>
                                <img style={{height: 200, width: 200}} src={port.ship_image}/>
                                <FineButton port_id={port.id} show={port.type == "Parking" || (port.vacant && port.type=="Non Parking")}/>
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
