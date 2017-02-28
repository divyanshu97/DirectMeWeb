import React from 'react'

const styles = {
    width: '250px',
    height: '150px'
}

let Navigate = React.createClass({
    render(){
        return (
            <div >
                <a href={this.props.redirectUrl}><img style={styles} src={this.props.src} alt="Loading Buttons"/></a>
            </div>
        )
    }
})

export default Navigate