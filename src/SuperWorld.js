import React from "react";
import Navigate from "./Navigate";
import GarageImg from "./images/garage.png";
import ParkNowImg from "./images/park_now_plank.png";
import ShowroomImg from "./images/showroom.png";
import ParkMineImg from "./images/parked_mine_plank.png";
import Bamboo from "./images/bamboo.png";
import Banana from "./images/banana.png";
import Coconut from "./images/coconut.png";
import Gold from "./images/coin.png";
import Timber from "./images/wood.png";
import Item from "./Item";

const base_url = "http://direct-me.herokuapp.com/"
let SuperWorld = React.createClass({


    getInitialState(){
        return {
            Gold: 0,
            Coconut: 0,
            Banana: 0,
            Timber: 0,
            Bamboo: 0,
            experience: 0,
            first_name: '',
            gravatar: ''
        }

    },

    setInventory(json) {
        let inventory_count = {}
        for (let i in json.inventory) {
            let item = json.inventory[i]
            inventory_count[item['item']] = item['count']
        }
        inventory_count['experience'] = json.experience
        inventory_count['first_name'] = json.first_name
        inventory_count['gravatar'] = json.gravatar
        this.setState(inventory_count)
    },

    componentDidMount(){
        let self = this
        fetch(base_url + 'user/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
            }
        }).then(function (response) {
            const data = response.json()
            return data
        }).then(function (json) {
            const user_id = json['user_id']
            localStorage.setItem('user_id', JSON.stringify(user_id))
            self.setInventory(json)

        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },
    render(){
        return (
            <div>
                <a href="/profile/"><img src={this.state.gravatar}/></a>
                <a href="/profile/">Howdy, {this.state.first_name}</a>
                <Item src={Bamboo} name="Bamboo" count={this.state.Bamboo}/>
                <Item src={Coconut} name="Coconut" count={this.state.Coconut}/>
                <Item src={Timber} name="Timber" count={this.state.Timber}/>
                <Item src={Banana} name="Banana" count={this.state.Banana}/>
                <Item src={Gold} name="Gold Coin" count={this.state.Gold}/>
                <Navigate src={GarageImg} redirectUrl="" message="Garage"/>
                <Navigate src={ShowroomImg} redirectUrl="/showroom/" message="Showroom"/>
                <Navigate src={ParkMineImg} redirectUrl="/parked-mine/" message="ParkMine"/>
                <Navigate src={ParkNowImg} redirectUrl="/parked-now/" message="Park Now"/>
                <Navigate src="" redirectUrl="/parked-on-mine/" message="Parked On Mine"/>
            </div>
        )
    }
})


export default SuperWorld