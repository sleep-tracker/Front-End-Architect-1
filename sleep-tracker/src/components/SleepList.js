import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components'
// import SleepSession from './SleepSession'

import {dummyData} from '../dummydata'

import axiosConfig from './AxiosConfig'

const SleepCard = styled.div`
    border: black solid 2px;
    width: 200px;
    margin-bottom: 10px;
`

class SleepList extends Component {
    constructor() {
        super()

        this.state = {
            userArray: [],
            dummyArray: dummyData
        }
    }
    componentDidMount() {
        axios.get( 'http://localhost:5000/api/users', axiosConfig )
            .then( res => {
                this.setState( { sleepSessions: res.data } )
            } )
            .catch( err => { console.error( err ) } )
    }

    render() {
        return (
            <div>
                <NavLink to='/sleepform'>Log New Sleep Session</NavLink>
                <h1>List of Sleep Data for the Week</h1>
                <div>
                    {this.state.dummyArray.map( session => (
                        <SleepCard>
                            <p>{session.sleepDate}</p>
                            <p>{session.wakeDate}</p>
                            <p>{session.bedTime}</p>
                            <p>{session.wakeTime}</p>
                            <p>{session.moodBefore}</p>
                            <p>{session.moodAfter}</p>
                            <p>{session.moodForDay}</p>
                        </SleepCard>
                    )
                    )}
                </div>
            </div>
        )
    }
}

export default SleepList