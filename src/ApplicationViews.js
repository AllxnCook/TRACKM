import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from "./home/Home"
import Login from "./auth/Login"
import Register from './auth/Register'


// component for controlling login behavior and redirecting incase of invald information

class ApplicationViews extends Component {
    // check to see if credentials are in local storage
    isAuthenticated = () => localStorage.getItem("userId") !== null;

    render() {
        return(
        <React.Fragment>
            <Route exact path="/signin" render={props => {return <Login {...props}/>}} />
            <Route exact path="/register" render={props => {return <Register {...props}/>}}/>
            <Route exact path="/home" render={props => {return this.isAuthenticated() ? (
                <Home {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }}
            />
        </React.Fragment>
        )
        }
    }

export default ApplicationViews;