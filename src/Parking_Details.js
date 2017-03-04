import React from 'react'

const base_url="http://direct-me.herokuapp.com/"

var ParkingDetails = React.createClass({
	getInitialState: function()
	{
		return{
			ports_List: []
		}
	},
	componentWillMount: function()
	{
		var self = this
		fetch(base_url+'core/ports/'+ JSON.parse(localStorage.getItem('user_id'))+'/', 
		{
			method: 'GET',
			headers: 
			{
   		 		'Content-Type': 'application/json',
   		 		'Authorization' : 'Token ' + JSON.parse(localStorage.getItem('token'))
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
                	let ports = json[i]
	                    data.push({
                        	type: ports.type,
                    	})
            	}
            	self.setState({
	                ports_List: data
            	})
        	}).catch(function (ex) {
	            console.log('parsing failed', ex)
        	})
    },

	render:function()
	{
		return(
			<div>
				{
                    this.state.ports_List.map((port,i) => {
                        return (
                            <div >
                                <p> {port.type} </p>
                            </div>
                        )
                    })
                }
			</div>
			)
	}
})

export default ParkingDetails;