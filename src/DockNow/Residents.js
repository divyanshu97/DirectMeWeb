import React from 'react'
import {browserHistory} from 'react-router'

const base_url = 'http://direct-me.herokuapp.com/'
let IslandResdentialsList = React.createClass({

    getInitialState: function () {
        return {
            island_id: JSON.parse(sessionStorage.getItem('island_id')),
            resedent_list: []
        }
    },

    componentDidMount: function () {
        let self = this
        fetch(base_url + 'user/get-suggestions/', {
            method: 'POST',
            body: JSON.stringify({island_id: this.state.island_id}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
            }
        }).then(function (response) {
            return response.json()
        }).then(function (json) {
            let data = []
            for (let i in json) {
                let resedent = json[i]
                data.push({
                    name: resedent.name,
                    user_id: resedent.user_id
                })
            }
            self.setState({
                resedent_list: data
            })
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },

    handleClick: function (e) {
        sessionStorage.setItem('resedential_id', JSON.stringify(e.target.id))
        browserHistory.push('/parking-details/')
    },

    render: function () {
        return (
            <div >
                {
                    this.state.resedent_list.map((resedent, i) => {
                        return (
                            <div>
                                <button id={resedent.user_id} onClick={this.handleClick}>Dock</button>
                                {resedent.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
})

export default IslandResdentialsList