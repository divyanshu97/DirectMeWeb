import * as React from 'react'
import CSS from './CSS/superworld.css'

const styles = {
    width: '50px',
    height: '50px'
}


const Item = React.createClass({
    render() {
        return (
            <div className={this.props.name}>
                <img src={this.props.src} className={this.props.css_class_name} />
                <span>{this.props.count}</span>
            </div>
        )
    }
})

export default Item