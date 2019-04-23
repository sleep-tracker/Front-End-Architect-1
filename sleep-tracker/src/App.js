import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import './App.css';

import SignupForm from './components/SignupForm'
import SleepForm from './components/SleepForm'
import SleepList from './components/SleepList'
import WhySleep from './components/WhySleep'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path='/' component={SignupForm} />
                <PrivateRoute exact path='/sleepform' component={SleepForm} />
                <PrivateRoute exact path='/sleepview' component={SleepList} />
                <PrivateRoute exact path='/whysleep' component={WhySleep} />
            </div>
        )
    }
}

export default App;

//node 1.15.2



