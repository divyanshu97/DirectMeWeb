import React from "react";

const base_url = "http://direct-me.herokuapp.com/"
let Profile = React.createClass({

    getInitialState(){
        return {
            first_name: '',
            last_name: ''
        }
    },

    fillForm(json){
        let user_data = {}
        user_data["first_name"] = json.first_name
        user_data["last_name"] = json.last_name
        this.setState(user_data)
    },
    componentDidMount(){
        let self = this
        fetch(base_url + 'user/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
            }
        }).then(function (response) {
            const data = response.json()
            return data
        }).then(function (json) {
            self.fillForm(json)
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    },

    handleChange(event){
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    },

    handleSubmit(event){
        event.preventDefault()
        fetch(base_url + 'user/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token'))
            },
            body: JSON.stringify({first_name: this.state.first_name, last_name: this.state.last_name})

        }).then(function (response) {
            return response.json()
        }).then(function (json) {
            console.log('parsed json', json)
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })

    },

    render()
    {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" name="FirstName" value={this.state.first_name} onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        Last Name:
                        <input type="text" name="LastName" value={this.state.last_name} onChange={this.handleChange}/>
                    </label><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
})

export default Profile