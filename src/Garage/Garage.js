import React from 'react'
import Jaala from './Images/jaala.png'
import Spider from './Images/spider.png'
import Banner from './Images/banner.png'
import Bulb from './Images/bulb.png'
import UpgradeShip from './UpgradeShip.js'
import CSS from './CSS/garage.css'

const Garage = React.createClass({
    render() {
        return (
            <div id="container">
                <ul id="garageparallax" data-scalar-x="5" data-scalar-y="5" style={{listStyle:'none'}}>
                    <li className="layer" data-depth="0.10"><img src={Jaala} id="jaala"/></li>
                    <li className="layer" data-depth="0.10"><img src={Spider} class="spider" id="spider"/></li>
                    <li className="layer" data-depth="0.30"><img src={Banner} id="banner" class="flip"/></li>
                    <li className="layer" data-depth="0.30"><img src={Bulb} className="swing" id="bulb"/></li>
                    <li className="layer" data-depth="0.40">

                    </li>

                </ul>
            <UpgradeShip />
            </div>

    )
    }
    })

export default Garage