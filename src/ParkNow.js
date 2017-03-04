import React from 'react';
import './ParkNow.css';
import Navigate from './Navigate.js';
import {browserHistory} from 'react-router'

const global_img = {
	img_0: 'https://media.giphy.com/media/yht1UwF4Bko92/giphy.gif',
	img_1: 'https://media4.giphy.com/media/5D6kjdPsBRYUo/200_s.gif'
}

const base_url="http://direct-me.herokuapp.com/"
var ParkNow = React.createClass({ 

	getInitialState: function() {
	    return {
	    	boats: [],
	    	i: 0,
	    	current_boat: {},
	    	boats_image: []
		}
  },
	
  componentDidMount: function() 
  {
		fetch(base_url + 'user/ships/', 
		{
			method: 'GET',
			headers: 
			{
   		 		'Content-Type': 'application/json',
   		 		'Authorization' : 'Token '+JSON.parse(localStorage.getItem('token'))
  			}
		})
		.then( response => 
		{
  			return response.text()
		})
		.then( json => 
		{	
			let boats = JSON.parse(json)
			this.setState({
				boats: boats,
				current_boat: boats[this.state.i]
			})
			for (var i =0; i <this.state.boats.length; i++) 
			{
					var boats_image = this.state.boats_image.slice()
					boats_image.push(boats[i].ship_image)
					this.setState({ boats_image: boats_image })
			}
  		localStorage.setItem('ship_to_park', JSON.stringify(this.state.boats[this.state.i].id))
		}),
		function(err) 
		{

		}
  },

	
 	handleLeftClick: function(event) 
 	{
 		let next = this.state.i
 		if(next !==0)
 		{
 			next = next-1
 		}
 		this.setState({
 			i: next,
 			current_boat: this.state.boats[next]
 		})
  		localStorage.setItem('ship_to_park', JSON.stringify(this.state.boats[this.state.i].id))
  	},

  	handleRightClick: function(event) 
  	{
  		let next = this.state.i
 		if(next !==this.state.boats.length - 1)
 		{
 			next = next+1
 		}
  		this.setState({
 			i: next,
 			current_boat: this.state.boats[next]
 		})
  		localStorage.setItem('ship_to_park', JSON.stringify(this.state.boats[this.state.i].id))
  	},

  	handleClick: function()
  	{
  		alert(JSON.parse(localStorage.getItem('ship_to_park')))
  	    browserHistory.push('/IslandWorld/')
  	},

  	render: function() 
  	{
  		let img = 'img_' + this.state.i
  		return (
  			
  		<div>
  			<button id="Left_Button" onClick={this.handleLeftClick}>Left</button>
  			<button id="Right_Button" onClick={this.handleRightClick}>Right</button>
        <Navigate id="DockButton" redirectUrl="/island-world/" message="Dock"/>
			<div ><img id="BoatImage" src={this.state.boats_image[this.state.i]} alt={this.state.boats[this.state.i]}/></div>
  		</div>

  		)
  }
})

export default ParkNow;