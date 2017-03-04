import React from 'react'

const styles = {
    width: '250px',
    height: '150px'
}

let Island = React.createClass({
    render(){
        return (
            <div >
                <img src={this.props.src} alt={this.props.name} style={styles}/>
            </div>
        )
    }
})

export default Navigate