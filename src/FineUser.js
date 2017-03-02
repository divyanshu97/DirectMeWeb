import React from 'react'

const base_url="http://direct-me.herokuapp.com/"
let FineButton = React.createClass({

    fineUser(e){
        let port_id = e.target.id
        fetch(base_url + 'core/fine/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
            },
            body: JSON.stringify({port_id: port_id})

        }).then(function (response) {
            return response.json()
        }).then(function (json) {
            console.log('parsed json', json)
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },

    render(){
        return (
            <div>
                <button id={this.props.port_id} disabled={this.props.show} onClick={this.fineUser}>Fine</button>
            </div>
        )
    }
})

export default FineButton