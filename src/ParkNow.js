import React from 'react'
import './ParkNow.css'
import DockButton from './DockShip.js'
import {browserHistory} from 'react-router'

const base_url = 'http://direct-me.herokuapp.com/'
let ParkNow = React.createClass({

    getInitialState: function () {
        return {
            boats: [],
            boat_index: 0,
            current_boat_id: 1,
            current_boat_status: "Idle",
            boats_image: []
        }
    },
    componentDidMount: function () {
        fetch(base_url + 'user/ships/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
            }
        }).then(response => {
            return response.text()
        }).then(json => {
            let boats = JSON.parse(json)
            this.setState({
                boats: boats,
                current_boat_id: boats[this.state.boat_index].id,
                current_boat_status: boats[this.state.boat_index].status,
            })
            for (var i = 0; i < this.state.boats.length; i++) {
                var boats_image = this.state.boats_image.slice()
                boats_image.push(boats[i].ship_image)
                this.setState({boats_image: boats_image})
            }
            sessionStorage.setItem('ship_to_park', JSON.stringify(this.state.boats[this.state.boat_index].id))
        })
    },
    handleLeftClick: function (event) {
        let next = this.state.boat_index
        if (next !== 0) {
            next = next - 1
        }
        this.setState({
            boat_index: next,
            current_boat_id: this.state.boats[next].id,
            current_boat_status: this.state.boats[next].status
        })
        sessionStorage.setItem('ship_to_park', JSON.stringify(this.state.boats[this.state.boat_index].id))
    },
    handleRightClick: function (event) {
        let next = this.state.boat_index
        if (next !== this.state.boats.length - 1) {
            next = next + 1
        }
        this.setState({
            boat_index: next,
            current_boat_id: this.state.boats[next].id,
            current_boat_status: this.state.boats[next].status
        })
        sessionStorage.setItem('ship_to_park', JSON.stringify(this.state.boats[this.state.boat_index].id))
    },
    render: function () {
        return (
            <div>
                <button id="Left_Button" onClick={this.handleLeftClick}>Left</button>
                <button id="Right_Button" onClick={this.handleRightClick}>Right</button>
                <img id="BoatImage" src={this.state.boats_image[this.state.boat_index]}
                     alt={this.state.boats[this.state.i]}/>
                <DockButton ship_id={this.state.current_boat_id} show={this.state.current_boat_status != "Idle" }/>
            </div>
        )
    }
})
export default ParkNow;