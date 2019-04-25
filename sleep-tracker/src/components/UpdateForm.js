import React from 'react'
import axios from 'axios'
import './Sleep.css'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import axiosConfig from './AxiosConfig'

const Smiley = styled.img`
    height: 30px;
    margin-right: 20px;
`
const InputLabel = styled.span`
    margin-right: 20px;
`
const EnterButton = styled.button`
    width: 100px;
    height: 30px;
    font-size: 16px;
    border-radius: 5px;
    background: green;
    color: white;
    margin-bottom: 30px;
`
const SleepFormContainer = styled.div`
    background: #8b849c;
    padding-top: 30px;
`
export default class SignupForm extends React.Component {
    constructor() {
        super()

        this.state = {
            sleepDate: '',
            wakeDate: '',
            sleepTime: '',
            wakeTime: '',
            moodBefore: '',
            moodAfter: '',
            moodDuring: ''
        }
    }

    componentDidMount = () => {
        this.setState({...this.props.sleepCardData})
    }

    handleChange = e => {
        this.setState( { [e.target.name]: e.target.value } )
    }

    updateSleepInfo = (e, id) => {
        e.preventDefault()
        let sleepObj = {}
        let sleep = this.state.sleepTime
        let wake = this.state.wakeTime
        if(Number(sleep[0]+sleep[1])>12){
            let hours = Number(sleep[0]+sleep[1])-12
            if(hours < 10){
                sleep = `0${hours}:${sleep[3]}${sleep[4]} pm`
            }else{
                sleep = `${hours}:${sleep[3]}${sleep[4]} pm`
            }
           
        } else{
            if(Number(sleep[0] + sleep[1]) == 0){
                sleep = `12:${sleep[3]}${sleep[4]} am`
            }else{
                sleep = `${sleep} am`
            
            }
            // console.log(sleep)
        }
        if(Number(wake[0]+wake[1])>12){
            let hours = Number(wake[0]+wake[1])-12
            if(hours < 10){
                wake = `0${hours}:${wake[3]}${wake[4]} pm`
            }else{
                wake = `${hours}:${wake[3]}${wake[4]} pm`
            }
        //    console.log(wake)
        } else{
            if(Number(wake[0] + wake[1]) == 0){
                wake = `12:${wake[3]}${wake[4]} am`
            }else{
                wake = `${wake} am`
            
            }
            // console.log(wake)
        }
        sleepObj = {
            sleepTime: sleep,
            wakeTime: wake,
            sleepDate: this.state.sleepDate,
            wakeDate: this.state.wakeDate,
            moodBefore: this.state.moodBefore,
            moodAfter: this.state.moodAfter,
            moodDuring: this.state.moodDuring
        }
        axios.post( `https://build-week-sleep-tracker.herokuapp.com/api/users/data/edit/${this.props.sleepCardData.id}`, sleepObj, axiosConfig )
            .then( res => console.log( res ) )
            .catch( err => console.log( err ) )

        this.setState = {
            sleepDate: '',
            wakeDate: '',
            sleepTime: '',
            wakeTime: '',
            moodBefore: '',
            moodAfter: '',
            moodDuring: ''
        }
    }

    handleChange = e => {
        this.setState( { [e.target.name]: e.target.value } )
    }


    render() {
        return (
            <SleepFormContainer>
                <h1>New Sleep Session</h1>
                <form onSubmit={this.sendSleepInfo}>
                    <p><InputLabel>Sleep Date:</InputLabel>
                        <input
                            name='sleepDate'
                            type="date"
                            value={this.state.sleepDate}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p><InputLabel>Wake Date:</InputLabel>
                        <input
                            name='wakeDate'
                            type="date"
                            value={this.state.wakeDate}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p><InputLabel>Bed Time:</InputLabel>
                        <input
                            name='sleepTime'
                            type="time"
                            value={this.state.sleepTime}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p><InputLabel>Wake Time:</InputLabel>
                        <input
                            name='wakeTime'
                            type="time"
                            value={this.state.wakeTime}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <InputLabel>Tired Rating at Bedtime:</InputLabel>

                        <input type="radio" name="moodBefore" value="1" onChange = {this.handleChange} />
                        <Smiley src="../../img/1.png" alt="sad face" />

                        <input type="radio" name="moodBefore" value="2" onChange = {this.handleChange}/>
                        <Smiley src="../../img/2.png" alt="neutral face" />

                        <input type="radio" name="moodBefore" value="3" onChange = {this.handleChange}/>
                        <Smiley src="../../img/3.png" alt="happy face" />

                        <input type="radio" name="moodBefore" value="4" onChange = {this.handleChange}/>
                        <Smiley src="../../img/4.png" alt="very happy face" />
                    </p>
                    <p>
                        <InputLabel>Mood Rating when Waking:</InputLabel>

                        <input type="radio" name="moodAfter" value="1" onChange = {this.handleChange}/>
                        <Smiley src="../../img/1.png" alt="sad face" />

                        <input type="radio" name="moodAfter" value="2" onChange = {this.handleChange}/>
                        <Smiley src="../../img/2.png" alt="neutral face" />

                        <input type="radio" name="moodAfter" value="3" onChange = {this.handleChange}/>
                        <Smiley src="../../img/3.png" alt="happy face" />

                        <input type="radio" name="moodAfter" value="4" onChange = {this.handleChange}/>
                        <Smiley src="../../img/4.png" alt="very happy face" />
                    </p>
                    <p>
                        <InputLabel>Overall Mood for the Day:</InputLabel>

                        <input type="radio" name="moodDuring" value="1" onChange = {this.handleChange}/>
                        <Smiley src="../../img/1.png" alt="sad face" />

                        <input type="radio" name="moodDuring" value="2" onChange = {this.handleChange}/>
                        <Smiley src="../../img/2.png" alt="neutral face" />

                        <input type="radio" name="moodDuring" value="3" onChange = {this.handleChange}/>
                        <Smiley src="../../img/3.png" alt="happy face" />

                        <input type="radio" name="moodDuring" value="4" onChange = {this.handleChange}/>
                        <Smiley src="../../img/4.png" alt="very happy face" />
                    </p>
                    <EnterButton type='submit'>Enter</EnterButton>
                </form>
            </SleepFormContainer>
        )
    }
}