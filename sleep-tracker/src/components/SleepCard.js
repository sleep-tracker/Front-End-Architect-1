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
            <p>sleep date: {props.sleepDate}</p>
            <p>wake date: {props.wakeDate}</p>
            <p>bed time: {props.sleepTime}</p>
            <p>wake time: {props.wakeTime}</p>
            <p>mood before: {props.moodBefore}</p>
            <p>mood after: {props.moodAfter}</p>
            <p>mood all day: {props.moodForDay}</p>
        </SleepCardStyle>
    )
}

export default SleepCard