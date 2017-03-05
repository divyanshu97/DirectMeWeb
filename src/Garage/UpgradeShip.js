import React from 'react'
import './CSS/garage.css'
import {browserHistory} from 'react-router'
import LeftArrow from './Images/arrowleft.png'
import RighttArrow from './Images/arrowright.png'
import UpgradeButton from './Images/upgradebtn.png'

const base_url = 'http://direct-me.herokuapp.com/'
const UpgradeShip = React.createClass({

    getInitialState: function () {
        return {
            boats: [],
            i: 0,
            current_boat: {}
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
                current_boat: boats[this.state.i]
            })
        })
    },
    handleLeftClick: function (event) {
        let next = this.state.i
        if (next !== 0) {
            next = next - 1
        }
        this.setState({
            i: next,
            current_boat: this.state.boats[next]
        })
    },
    handleRightClick: function (event) {
        let next = this.state.i
        if (next !== this.state.boats.length - 1) {
            next = next + 1
        }
        this.setState({
            i: next,
            current_boat: this.state.boats[next]
        })
    },
    render: function () {
        return (
            <div>
                <img src={LeftArrow} onClick={this.handleLeftClick} id="arrowleft"/>
                <img src={RighttArrow} onClick={this.handleRightClick} id="arrowright"/>
                <img src={this.state.current_boat.ship_image} id="ship" style={{height: 200, width: 200}}/>
                <li className="layer" data-depth="0.60"><img src={UpgradeButton} id="upgradebtn"/></li>
                <div id="details">
                    <div id="shipstuff">
                        <h1 id="shipname">{this.state.current_boat.name}</h1>

                    </div>
                </div>
            </div>
        )
    }
})
export default UpgradeShip;