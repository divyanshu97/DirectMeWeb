import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
//import {Router, Route, browserHistory} from 'react-router';
import Login from './Login.js';
const responseGoogle = (response) => {
  console.log(response)
}
function handleSuccess(data) {
	const accessToken = data.accessToken
	console.log("Sending data")
	console.log(data.accessToken)
	fetch('http://direct-me.herokuapp.com/user/social/google-oauth2/', {
		method: 'POST',
		body: JSON.stringify({'access_token': accessToken}),
		headers: {
   		 "Content-Type": "application/json"
  		}
	}).then(function(response) {
		console.log(response.json())
	}).then(function(json) {

	}),function(err) {
		console.log("Some error occured")
		console.log("Error : "+err.Message)
	}
}

function handleFaliure(data) {
	console.log("Error :- "+data.error)
}

ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Google Login"
    onSuccess={handleSuccess}
    onFailure={handleFaliure}
  />,
  document.getElementById('root')
);