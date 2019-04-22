import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import './App.css';

import SignupForm from './components/SignupForm'
import SleepForm from './components/SleepForm'
import SleepList from './components/SleepList'
import WhySleep from './components/WhySleep'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path='/' component={SignupForm} />
                <Route path component={SleepForm} />
                <Route path='/sleepview' component={SleepList} />
                <Route path='/whysleep' component={WhySleep} />
            </div>
        )
    }
}

export default App;
