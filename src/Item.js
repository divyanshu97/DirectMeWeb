import * as React from 'react'

const styles = {
    width: '50px',
    height: '50px'
}


const Item = React.createClass({
    render() {
        return (
            <span>
                <img src={this.props.src} alt={this.props.name} style={styles}/>
                <span>{this.props.count}</span>
            </span>
        )
    }
})

export default Item