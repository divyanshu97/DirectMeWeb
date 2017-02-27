import * as React from 'react'
import GoogleLogin from 'react-google-login'
import { Router, Route, browserHistory } from 'react-router'


let Login = React.createClass({

    handleSuccess(data){
        const accessToken = data.accessToken

        fetch('http://direct-me.herokuapp.com/user/social/google-oauth2/',
            {
                method: 'POST',
                body: JSON.stringify({'access_token': accessToken}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                const user_token = json['token']
                localStorage.setItem('token', JSON.stringify(user_token))
                browserHistory.push('/superworld')

            }),
            function (err) {

            }
    },

    handleFaliure(data) {
        console.log("Error :- " + data.error)
    },

    render()
    {
        return (<GoogleLogin
            clientId="423627987537-16vs5nuat07fc62klaosgl7o0o1vmh7h.apps.googleusercontent.com"
            buttonText="Google Login"
            onSuccess={this.handleSuccess}
            onFailure={this.handleFaliure}
        />)
    }
})

export default Login


