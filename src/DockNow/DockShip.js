import React from 'react'
import {browserHistory} from 'react-router'

const base_url = 'http://direct-me.herokuapp.com/'
const DockButton = React.createClass({

    dock_ship(e){
        browserHistory.push('/island-world/')
    },

    render(){
        return (
            <div>
                <button id={this.props.ship_id} disabled={this.props.show} onClick={this.dock_ship}>Dock</button>
            </div>
        )
    }
})

export default DockButton