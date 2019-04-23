import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import SleepSession from './SleepSession'

class SleepList extends Component {
    constructor(){
        super()

        this.state = {
            sleepSessions: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/users')
            .then(res => {
                this.setState({ sleepSessions: res.data })
            })
            .catch(err => {console.error(err)})
    }

    render() {
        return (
            <div>
                <NavLink to='/sleepform'>Log New Sleep Session</NavLink>
                <h1>Sleep Moods for the Week</h1>
                    {/* {this.props.sleepSessions.map( session => {
                        return (
                            <SleepSession
                                key={session.id}
                                session={session}
                            />
                        )
                    } )} */}
            </div>
        )
    }
}

export default SleepList