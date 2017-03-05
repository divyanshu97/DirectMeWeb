import React from 'react'
import ItemBar from './ItemBar'
import Showroom from './Images/showroom.png'
import Plank from './Images/plank.png'
import Docknow from './Images/docknow.png'
import MyDocking from './Images/mydocking.png'
import Cloud1 from './Images/cloud1.png'
import Cloud2 from './Images/cloud2.png'
import Cloud3 from './Images/cloud3.png'
import Cloud4 from './Images/cloud4.png'
import Wave1 from './Images/wave1.png'
import Wave2 from './Images/wave2.png'
import Wave3 from './Images/wave3.png'
import Wave4 from './Images/wave4.png'
import BigSign from './Images/bigsign.png'
import CSS from './CSS/superworld.css'


let SuperWorld = React.createClass({
    render() {
        return (
            <div className="maincontainer">

                <ItemBar/>

                {/* SUPER WORLD ELEMENTS */}
                <div className="showroom">
                    <a href="/showroom/">
                        <img className="showroomimg" src={Showroom}/>
                    </a>

                </div>

                <div className="plank">
                    <img className="plankimg" src={Plank}/>
                </div>

                <div className="parknow">
                    <a href="/dock-now/"><img src={Docknow} className="parknowimg"/></a>
                </div>

                <div className="parkedmine">
                    <a href="/dockings/"><img src={MyDocking} className="parkedmineimg"/></a>
                </div>
                {/* SUPER WORLD ELEMENTS ENDS HERE */}

                {/* CLOUDS STARTS HERE */}
                <img src={Cloud1} className="cloud1img"/>
                <img src={Cloud2} className="cloud2img"/>
                <img src={Cloud3} className="cloud3img"/>
                <img src={Cloud4} className="cloud4img"/>
                {/* CLOUDS ENDS HERE */}

                {/* WATER/SEA SPRITE */}
                <ul id="waterwaves" style={{'list-style': 'none'}}>
                    <li className="layer" data-depth="0.0625">
                        <div className="seawave1"><img src={Wave1} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.125">
                        <div className="seawave2"><img src={Wave2} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.1875">
                        <div className="seawave3"><img src={Wave3} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.25">
                        <div className="seawave4"><img src={Wave4} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.3125">
                        <div className="seawave5"><img src={Wave1} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.375">
                        <div className="seawave6"><img src={Wave2} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.4375">
                        <div className="seawave7"><img src={Wave3} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.5">
                        <div className="seawave8"><img src={Wave4} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.5625">
                        <div className="seawave9"><img src={Wave1} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.625">
                        <div className="seawave10"><img src={Wave2} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.6875">
                        <div className="seawave11"><img src={Wave3} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.75">
                        <div className="seawave12"><img src={Wave4} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.8125">
                        <div className="seawave13"><img src={Wave1} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.875">
                        <div className="seawave14"><img src={Wave2} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="0.9375">
                        <div className="seawave15"><img src={Wave3} className="seawaveimg"/></div>
                    </li>
                    <li className="layer" data-depth="1">
                        <div className="seawave16"><img src={Wave4} className="seawaveimg"/></div>
                    </li>
                </ul>
                {/* WATER/SEA SPRITE ENDS HERE */}

                <div className="clothsign">
                    <img src={BigSign} className="clothsignimg"/>
                </div>
            </div>
        )
    }
})

export default SuperWorld