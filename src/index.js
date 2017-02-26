import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Login from './Login.js';

function handleSuccess(data) 
{
	const accessToken = data.accessToken

	fetch('http://direct-me.herokuapp.com/user/social/google-oauth2/', 
	{
		method: 'POST',
		body: JSON.stringify({'access_token': accessToken}),
		headers: 
		{
   		 "Content-Type": "application/json"
  		}
	})
	.then(function(response) 
	{
  		return response.text()
	})
	.then(function(json) 
	{
		const user_token = json
		
	}),
	function(err) 
	{

	}
}

function handleFaliure(data) 
{
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