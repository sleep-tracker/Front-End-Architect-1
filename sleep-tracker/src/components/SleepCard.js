import React from 'react'
import styled from 'styled-components'

const SleepCardStyle = styled.div`
    border: black solid 2px;
    width: 200px;
    margin: 40px 0;
    background: white;
`

const SleepCard = props => {
    return (
        <SleepCardStyle>
            <p>sleep date: {props.session.sleepDate}</p>
            <p>wake date: {props.session.wakeDate}</p>
            <p>bed time: {props.session.sleepTime}</p>
            <p>wake time: {props.session.wakeTime}</p>
            <p>mood before: {props.session.moodBefore}</p>
            <p>mood after: {props.session.moodAfter}</p>
            <p>mood all day: {props.session.moodForDay}</p>
        </SleepCardStyle>
    )
}

export default SleepCard