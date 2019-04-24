import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components'
// import SleepSession from './SleepSession'

import {dummyData} from '../dummydata'
import SleepForm from './SleepForm'

import axiosConfig from './AxiosConfig'

const SleepCard = styled.div`
    border: black solid 2px;
    width: 200px;
    margin-bottom: 10px;
`
const SleepCardContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

class SleepList extends Component {
    constructor() {
        super()

        this.state = {
            userArray: [],
            dummyArray: []
        }
    }
    componentDidMount() {
        axios.get( 'https://build-week-sleep-tracker.herokuapp.com/api/users', axiosConfig )
            .then( res => {
                this.setState( { sleepSessions: res.data, dummyArray: dummyData } )
            } )
            .catch( err => { console.error( err ) } )
    }

    addNewSleepCard = newCard => {}

    render() {
        return (
            <div>
                {/* <NavLink to='/sleepform'>Log New Sleep Session</NavLink> */}
                <h1>List of Sleep Data for the Week</h1>
                <SleepCardContainer>
                    {this.state.dummyArray.map( session => (
                        <SleepCard>
                            <p>sleep date: {session.sleepDate}</p>
                            <p>wake date: {session.wakeDate}</p>
                            <p>bed time: {session.sleepTime}</p>
                            <p>wake time: {session.wakeTime}</p>
                            <p>mood before: {session.moodBefore}</p>
                            <p>mood after: {session.moodAfter}</p>
                            <p>mood all day: {session.moodForDay}</p>
                        </SleepCard>
                    )
                    )}
                </SleepCardContainer>
                <hr/>
                <SleepForm dummyArray={this.state.dummyArray} addNewSleepCard={this.addNewSleepCard} />
            </div>
        )
    }
}

export default SleepList