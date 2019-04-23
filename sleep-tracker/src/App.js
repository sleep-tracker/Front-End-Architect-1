import React, { Component } from 'react'
import { Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios'
import './App.css';

import SignupForm from './components/SignupForm'
import SleepForm from './components/SleepForm'
import SleepList from './components/SleepList'
import WhySleep from './components/WhySleep'
import PrivateRoute from './components/PrivateRoute'
import LoginForm from './components/LoginForm';

class App extends Component {
    constructor(){
        super()

        this.state = {
            sleepSessions: []
        }
    }

    // componentDidMount(){
    //     axios.post('http://localhost:5000/????????')
    //         .then(res => {
    //             this.setState({ friends: res.data })
    //         })
    //         .catch(err => {console.error(err)})
    // }

    render() {
        return (
            <div className="App">
                <Route exact path='/' component={SignupForm} />

                <PrivateRoute exact path='/sleepform' component={SleepForm} />

                <PrivateRoute exact path='/sleepview' 
                    component={SleepList }/>

                <PrivateRoute exact path='/whysleep' component={WhySleep} />

                <Route exact path='/login' render={props => <LoginForm
                        {...props} />}/>
            </div>
        )
    }
}

export default withRouter(App) 

//node 1.15.2



