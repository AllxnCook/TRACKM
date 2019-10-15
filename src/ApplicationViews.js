import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from "./home/Home"


// component for controlling login behavior and redirecting incase of invald information

class ApplicationViews extends Component {
    // check to see if credentials are in local storage
    isAuthenticated = () => localStorage.getItem("userId") !== null;

    render() {
        return(
        <React.Fragment>
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