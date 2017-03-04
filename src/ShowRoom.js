import React from "react";
import Navigate from "./Navigate.js";
import {browserHistory} from "react-router";

const base_url = "http://direct-me.herokuapp.com/"

var ParkNow = React.createClass({

    getInitialState: function () {
        return {
            boats: [],
            i: 0,
            current_boat: {},
            boats_image: [],
            boats_buyCost: []
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
                for (var i = 0; i < this.state.boats.length; i++) {
                    var boats_image = this.state.boats_image.slice()
                    boats_image.push(boats[i].image)
                    this.setState({boats_image: boats_image})
                    var boats_buyCost = this.state.boats_buyCost.slice()
                    boats_buyCost.push(boats[i].buy_cost)
                    this.setState({boats_buyCost: boats_buyCost})
                }
            }),
            function (err) {

            }
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
        let img = 'img_' + this.state.i
        return (
            <div>
                <button id="Left_Button" onClick={this.handleLeftClick}>Left</button>
                <button id="Right_Button" onClick={this.handleRightClick}>Right</button>
                <Navigate id="DockButton" redirectUrl="" message="Buy"/>
                <div ><img id="BoatImage" src={this.state.boats_image[this.state.i]}
                           alt={this.state.boats[this.state.i]}/></div>
                <div id="buyCost">Buy Cost :{this.state.boats_buyCost[this.state.i]}</div>
            </div>
        )
    }
})

export default ParkNow;