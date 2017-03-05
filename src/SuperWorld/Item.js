import React from 'react'

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