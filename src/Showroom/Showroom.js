import React from 'react'
import SelectShip from './SelectShip'
import Openbanner from './Images/openbanner.png'
import Showbanner from './Images/showbanner.png'
import Lamp from './Images/lamp.png'
import CSS from './CSS/showroom.css'

const Showroom = React.createClass({
    render() {
        return (
            <div id="container">
                <ul id="garageparallax" data-scalar-x="5" data-scalar-y="5" style={{listStyle: 'none'}}>
                    <li className="layer" data-depth="0.20"><img src={Openbanner} id="open"/></li>
                    <li className="layer" data-depth="0.30"><img src={Showbanner} id="showbanner" className="flip"/>
                    </li>
                    <li className="layer" data-depth="0.30"><img src={Lamp} className="swing" id="lamp"/></li>

                    <SelectShip/>

                </ul>
            </div>
        )
    }
})

export default Showroom