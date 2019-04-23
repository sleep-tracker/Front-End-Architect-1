import React from 'react'
import axios from 'axios'
import './Sleep.css'
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Smiley = styled.img`
    height: 30px;
    margin-right: 20px;
`
const InputLabel = styled.span`
    margin-right: 20px;
`
export default class SignupForm extends React.Component{
    constructor(){
        super()

        this.state = {
            sleepDate: '',
            wakeDate: '',
            bedTime: '',
            wakeTime: '',
            moodBefore: '',
            moodAfter: '',
            moodForDay: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    sendSleepInfo = e => {
        e.preventDefault()
        const hoursSlept = this.state.wakeTime - this.state.bedTime
        const sleepObj = {hours: hoursSlept, tired: this.state.tiredAtBedtime,
                            moodWaking: this.state.moodWhenWaking, 
                            overallMood: this.state.overallMoodForDay}

        axios.post('http://localhost:5000/api/users', sleepObj)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        this.setState = {
            sleepDate: '',
            wakeDate: '',
            bedTime: '',
            wakeTime: '',
            moodBefore: '',
            moodAfter: '',
            moodForDay: ''
        }
    }

    render(){
        return(
            <div className='sleepform'>
                <h1>New Sleep Session</h1>
                <form onSubmit={this.sendSleepInfo}>
                    <p><InputLabel>Sleep Date:</InputLabel>
                        <input 
                            name='sleepDate' 
                            type="date"
                        />
                    </p>
                    <p><InputLabel>Wake Date:</InputLabel>
                        <input 
                            name='wakeDate' 
                            type="date"
                        />
                    </p>
                    <p><InputLabel>Bed Time:</InputLabel> 
                        <input 
                            name='bedTime' 
                            type="time"
                            // value={this.state.bedTime} 
                            // onChange={}
                        />
                    </p> 
                    <p><InputLabel>Wake Time:</InputLabel> 
                        <input 
                            name='wakeTime' 
                            type="time"
                            // value={this.state.wakeTime} 
                            // onChange={}
                        />
                    </p>
                    <p>
                        <InputLabel>Tired Rating at Bedtime:</InputLabel>

                        <input type="radio" name="moodBefore" value="1" />
                        <Smiley src="../../img/1.png" alt="sad face"/>

                        <input type="radio" name="moodBefore" value="2" />
                        <Smiley src="../../img/2.png" alt="neutral face"/>

                        <input type="radio" name="moodBefore" value="3" />
                        <Smiley src="../../img/3.png" alt="happy face"/>

                        <input type="radio" name="moodBefore" value="4" />
                        <Smiley src="../../img/4.png" alt="very happy face"/>
                    </p>
                    <p>
                        <InputLabel>Mood Rating when Waking:</InputLabel>

                        <input type="radio" name="moodAfter" value="1" />
                        <Smiley src="../../img/1.png" alt="sad face"/>

                        <input type="radio" name="moodAfter" value="2" />
                        <Smiley src="../../img/2.png" alt="neutral face"/>

                        <input type="radio" name="moodAfter" value="3" />
                        <Smiley src="../../img/3.png" alt="happy face"/>

                        <input type="radio" name="moodAfter" value="4" />
                        <Smiley src="../../img/4.png" alt="very happy face"/>
                    </p>
                    <p>
                        <InputLabel>Overall Mood for the Day:</InputLabel>

                        <input type="radio" name="moodForDay" value="1" />
                        <Smiley src="../../img/1.png" alt="sad face"/>

                        <input type="radio" name="moodForDay" value="2" />
                        <Smiley src="../../img/2.png" alt="neutral face"/>

                        <input type="radio" name="moodForDay" value="3" />
                        <Smiley src="../../img/3.png" alt="happy face"/>

                        <input type="radio" name="moodForDay" value="4" />
                        <Smiley src="../../img/4.png" alt="very happy face"/>
                    </p>
                    <button type='submit'>Enter</button>
                </form>
            </div>
        )
    }
}