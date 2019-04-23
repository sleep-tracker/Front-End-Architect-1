import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SleepSession from './SleepSession'

class SleepList extends Component {
    render() {
        return (
            <div>
                <NavLink to='/sleepform'>Log New Sleep Session</NavLink>
                <h1>Sleep Moods for the Week</h1>
                    {/* {this.props.sleepSessions.map( session => {
                        return (
                            <SleepSession
                                hours={session.hours}
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