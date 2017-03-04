import React from 'react';
import './IslandWorld.css';
import Island1Img from './images/Island1.png';
import Island2Img from './images/Island2.png';
import Island5Img from './images/Island3.png';
import Island4Img from './images/Island4.png';
import Island3Img from './images/Island5.png';
import {Router, Route, browserHistory} from 'react-router'



const base_url="http://direct-me.herokuapp.com/"
var IslandWorld = React.createClass({ 

	getInitialState: function() 
  {
	    return {
	    	users: [],
	    	islandResidentials: [],
	    	islandId: 1,
		  }
	},

	componentDidMount: function() 
  {
  			
  },
	
  handleClick: function(event)
	{
  		var island = this.state.islandId
      island = event.target.id
  		this.setState({
  			islandId: island
  		})
		  localStorage.setItem('island_id', JSON.stringify(island))
      browserHistory.push('/island-residentials/')
 	},

  render: function() 
  {
  	return (
  			
  		<div id="container">
        <div><img id="1" src={Island1Img} alt="Island 1" onClick={this.handleClick}/></div>
        <div><img id="2" src={Island2Img} alt="Island 2" onClick={this.handleClick}/></div>
        <div><img id="3" src={Island3Img} alt="Island 5" onClick={this.handleClick}/></div>
        <div><img id="4" src={Island4Img} alt="Island 4" onClick={this.handleClick}/></div>
        <div><img id="5" src={Island5Img} alt="Island 3" onClick={this.handleClick}/></div>	
      </div>

  		)
  }
})

export default IslandWorld;
