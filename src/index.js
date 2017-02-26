import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

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
    clientId="423627987537-16vs5nuat07fc62klaosgl7o0o1vmh7h.apps.googleusercontent.com"
    buttonText="Google Login"
    onSuccess={handleSuccess}
    onFailure={handleFaliure}
  />,
  document.getElementById('root')
);