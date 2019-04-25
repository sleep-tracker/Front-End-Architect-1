import React from 'react'
import axios from 'axios'
import axiosConfig from './AxiosConfig'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const SleepCardStyle = styled.div`
    border: black solid 2px;
    width: 230px;
    margin: 40px 0;
    background: #ccc;
`
const SleepCardButton = styled.button`
    margin: 0 10px 20px 10px;
`

const deleteCard = sleepObj => {
    axios.post( 'https://build-week-sleep-tracker.herokuapp.com/api/users/data/add', sleepObj, axiosConfig )
            .then( res => console.log( res ) )
            .catch( err => console.log( err ) )
}

const SleepCard = props => {
    return (
        <SleepCardStyle>
            <p>sleep date: {props.session.sleepDate}</p>
            <p>wake date: {props.session.wakeDate}</p>
            <p>bed time: {props.session.sleepTime}</p>
            <p>wake time: {props.session.wakeTime}</p>
            <p>mood before: {props.session.moodBefore}</p>
            <p>mood after: {props.session.moodAfter}</p>
            <p>mood all day: {props.session.moodDuring}</p>
            <SleepCardButton>Update</SleepCardButton><SleepCardButton>Delete</SleepCardButton>
        </SleepCardStyle>
    )
}

SleepCard.propsType = {
    session: PropTypes.shape({
        sleepDate: PropTypes.string,
        wakeDate: PropTypes.string,
        sleepTime: PropTypes.string,
        wakeTime: PropTypes.string,
        moodBefore: PropTypes.string,
        moodAfter: PropTypes.string,
        moodDuring: PropTypes.string
    })
}

export default SleepCard