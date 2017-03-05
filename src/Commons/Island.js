import React from 'react'
import {browserHistory} from 'react-router'

const Island = React.createClass({
    handleClick(e) {
        sessionStorage.setItem('island_id', JSON.stringify(e.target.id))
        browserHistory.push('/island-residents/')
    },
    render(){
        return (
            <div >
                <p>{this.props.id}</p>
                <img id={this.props.id} src={this.props.src} alt={this.props.name} onClick={this.handleClick}/>
            </div>
        )
    }
})

export default Island