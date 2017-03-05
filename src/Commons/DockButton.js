import React from 'react'

const base_url = 'http://direct-me.herokuapp.com/'
const DockButton = React.createClass({
    handleClick(e) {
        fetch()
    },
    render() {
        return (
            <div>
                <button disabled={this.props.show} onClick={this.handleClick} >Dock</button>
            </div>
        )

    }
})