import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../firebase';
import { actionType } from '../reducer';
import { useStateValue } from '../StateProviderContext';
import '../Styles/LoginPage.css';

function LoginPage() {

    const [state, dispatch] = useStateValue();

    const signin = () => {
        //e.preventDefault();
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result)
            dispatch({
                type: actionType.SET_USER,
                user: result.user
            })
        })
        .catch((error) => {
            alert(error.message)
        })
    }
    return (
        <div className = "loginpage">
            <div className = "loginpage__container">
                <img src = "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt = "Slack_logo"/>
                <h1>Sign in to Your Company HQ</h1>
                <p>yourcompany.slack.com</p>
                <Button onClick = {signin} >Sign In with Google</Button>
            </div>
        </div>
    )
}

export default LoginPage;
