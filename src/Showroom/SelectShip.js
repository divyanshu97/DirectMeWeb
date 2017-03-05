import React from 'react'
import {browserHistory} from 'react-router'
import LeftArrow from './Images/arrowleft.png'
import RightArrow from './Images/arrowright.png'
import BuyButton from './Images/buybtn.png'
const base_url = 'http://direct-me.herokuapp.com/'

const SelectShip = React.createClass({

    getInitialState: function () {
        return {
            boats: [],
            i: 0,
            current_boat: {}
        }
    },

    componentDidMount: function () {
        fetch(base_url + 'core/ships/',
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

    handleClick: function () {
        browserHistory.push('/IslandWorld/')
    },

    render: function () {
        return (

            <div>
                <li className="layer" data-depth="0.40">
                    <div id="showdetails1">
                        <div id="shipstuff">
                            <h1 id="shipname">{this.state.current_boat.name}</h1>
                            <p>Cost {this.state.current_boat.buy_cost}</p>
                            <p>Experience Gain {this.state.current_boat.experience_gain}</p>
                            <p>Multiplier {this.state.current_boat.cost_multiplier}</p>
                        </div>
                    </div>
                </li>

                <li className="layer" data-depth="0.40">
                    <div id="showdetails2">
                        <div id="showcontent2">
                            <h1>Details</h1>
                        </div>
                    </div>
                </li>
                <img src={LeftArrow} id="arrowleft" onClick={this.handleLeftClick}/>
                <img src={RightArrow} id="arrowright" onClick={this.handleRightClick}/>
                <img src={this.state.current_boat.image} id="ship" style={{height: 200, width: 200}}/>
                <li className="layer" data-depth="0.50"><img src={BuyButton} id="buybtn"/></li>
            </div>
        )
    }
})

export default SelectShip;