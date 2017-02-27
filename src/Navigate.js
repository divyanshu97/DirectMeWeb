import React from 'react'


const styles = {
    width: '250px',
    height: '150px'
}

let Navigate = React.createClass({
    render(){
        const url = this.props.src
        return (
            <div >
                <a href={this.props.redirectUrl}><img style={styles} src={this.props.src}/></a>
            </div>
        )
    }
})

export default Navigate