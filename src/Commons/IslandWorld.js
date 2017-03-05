import React from 'react'
import Island from './Island.js'

const base_url = 'http://direct-me.herokuapp.com/'

const IslandWorld = React.createClass({

    getInitialState: function () {
        return {
            island_id: 1,
        }
    },
    render: function () {
        return (
            <div>
                <Island id="1" src=" " name="Banana Island"/>
                <Island id="2" src=" " name="Bamboo Island"/>
                <Island id="3" src=" " name="Coconut Island"/>
                <Island id="4" src=" " name="Timber Island"/>
                <Island id="5" src=" " name="Pirate Island"/>
            </div>

        )
    }
})

export default IslandWorld;
