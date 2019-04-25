import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
// import axios from 'axios'
import './App.css';

import SignupForm from './components/SignupForm'
import SleepForm from './components/SleepForm'
import SleepList from './components/SleepList'
import WhySleep from './components/WhySleep'
import PrivateRoute from './components/PrivateRoute'
import LoginForm from './components/LoginForm';
import UpdateForm from './components/UpdateForm'

class App extends Component {
    constructor(){
        super()

        this.state = {
            sleepSessions: []
        }
    }

    render() {
        return (
            <div className="App">
                <Route exact path='/' component={SignupForm} />

                <Route exact path='/login' render={props => <LoginForm {...props} />}/>

                <PrivateRoute exact path='/sleepform' component={SleepForm} />

                <PrivateRoute exact path='/sleepview' component={SleepList }/>

                <PrivateRoute exact path='/whysleep' component={WhySleep} />

                <PrivateRoute exact path='/updateform' component={UpdateForm} />
            </div>
        )
    }
}

export default withRouter(App) 

//node 1.15.2



