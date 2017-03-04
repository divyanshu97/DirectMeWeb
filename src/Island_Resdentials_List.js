import React from 'react'
import './Island_Resdentials_List.css'
import {browserHistory} from 'react-router'

const base_url="http://direct-me.herokuapp.com/"

var IslandResdentialsList = React.createClass({

	getInitialState: function()
	{
		return {
			users: [],
			island_id: JSON.parse(localStorage.getItem('island_id')),
			user_name: [],
			resedentials_list: []
		}
	},

	componentDidMount: function()
	{
		var self = this
			fetch(base_url+'user/get-suggestions/',
			{
				method: 'POST',
				body: JSON.stringify({island_id :this.state.island_id}),
				headers:
				{
					'Content-Type' : 'application/json',
					'Authorization' : 'Token '+ JSON.parse(localStorage.getItem('token'))
				}
			})
			.then(function (response) 
			{
    	        return response.json()
	        })
	        .then(function (json) 
	        {
        	    	let data = []
            		for (let i in json) {
                	let resedential = json[i]
	                    data.push({
                        	name: resedential.name,
                    	})
            	}
            	self.setState({
	                resedentials_list: data
            	})
        	}).catch(function (ex) {
	            console.log('parsing failed', ex)
        	})
    },

	handleClick: function(event)
	{
		browserHistory.push('/parking-details/')
	},


	render: function()
	{
		return (
			<div >
				{
                    this.state.resedentials_list.map((resedential,i) => {
                        return (
                            <div onClick={this.handleClick}>
                                <p> {resedential.name} </p>
                            </div>
                        )
                    })
                }
			</div>
		)
	}
})

export default IslandResdentialsList;