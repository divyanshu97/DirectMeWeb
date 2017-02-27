import React from 'react'
import Navigate from './Navigate'
import GarageImg from './images/garage.png'
import ParkNowImg from './images/park_now_plank.png'
import ShowroomImg from './images/showroom.png'
import ParkMineImg from './images/parked_mine_plank.png'
import Bamboo from './images/bamboo.png'
import Banana from './images/banana.png'
import Coconut from './images/coconut.png'
import Gold from './images/coin.png'
import Timber from './images/wood.png'
import Item from './Item'

let SuperWorld = React.createClass({


    getInitialState(){
        return {
            Gold: 0,
            Coconut: 0,
            Banana: 0,
            Timber: 0,
            Bamboo: 0,
            Experience: 0
        }

    },

    setInventory(json) {
        let inventoryCount = {}
        for(let i in json.inventory) {
            let item = json.inventory[i]
            inventoryCount[item['item']] = item['count']
        }
        inventoryCount['Experience'] = json.experience
        this.setState(inventoryCount)
    },

    componentDidMount(){

        let self = this
        fetch('http://direct-me.herokuapp.com/user/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
            }
        }).then(function (response) {
            const data = response.json()
            return data
        }).then(function (json) {
            self.setInventory(json)

        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },
    render(){
        return (
            <div>
                <Item src={Bamboo} name="Bamboo" count={this.state.Bamboo}/>
                <Item src={Coconut} name="Coconut" count={this.state.Coconut}/>
                <Item src={Timber} name="Timber" count={this.state.Timber}/>
                <Item src={Banana} name="Banana" count={this.state.Banana}/>
                <Item src={Gold} name="Gold Coin" count={this.state.Gold}/>
                <Navigate src={GarageImg} redirectUrl="https://www.google.co.in"/>
                <Navigate src={ShowroomImg} redirectUrl=""/>
                <Navigate src={ParkMineImg} redirectUrl=""/>
                <Navigate src={ParkNowImg} redirectUrl=""/>

            </div>
        )
    }
})


export default SuperWorld