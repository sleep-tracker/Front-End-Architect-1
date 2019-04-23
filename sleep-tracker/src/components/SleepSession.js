import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const SleepSession = (props) => {
    return(
        <div>
            <p>Hours Slept: {props.session.hours}</p>
        </div>
    )
}

export default SleepSession