import React from 'react'
import Bamboo from './Images/bamboo.png'
import Banana from './Images/banana.png'
import Coconut from './Images/coconut.png'
import Gold from './Images/coin.png'
import Timber from './Images/wood.png'
import Setting from './Images/setting.png'
import Leaderboard from './Images/leaderboardsign.png'
import Item from './Item'
import CSS from './CSS/superworld.css'

const base_url = 'http://direct-me.herokuapp.com/'

let ItemBar = React.createClass({


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

            <div className="itembar">


                <div className="leaderboard">
                    <img src={Leaderboard} className="leaderboardimg"/>
                </div>
                <Item name="coin" src={Gold} count={this.state.Gold} css_class_name="coinimg"/>
                <Item name="wood" src={Timber} count={this.state.Timber} css_class_name="woodimg"/>
                <Item name="bamboo" src={Bamboo} count={this.state.Bamboo} css_class_name="bambooimg"/>
                <Item name="banana" src={Banana} count={this.state.Banana} css_class_name="bananaimg"/>
                <Item name="coconut" src={Coconut} count={this.state.Coconut} css_class_name="coconutimg"/>
                <div className="setting">
                    <img src={Setting} className="settingimg"/>
                </div>
            </div>
        )
    }
})


export default ItemBar