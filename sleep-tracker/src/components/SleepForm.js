import React from 'react';
import axios from 'axios';

export default class SignupForm extends React.Component{
    constructor(){
        super()

        this.state = {
            bedTime: '',
            wakeTime: '',
            tiredAtBedtime: '',
            moodWhenWaking: '',
            overallMoodForDay: ''
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
            bedTime: '',
            wakeTime: '',
            tiredAtBedtime: '',
            moodWhenWaking: '',
            overallMoodForDay: ''
        }
    }

    render(){
        return(
            <div>
                <h1>New Sleep Session</h1>
                <form onSubmit={this.sendSleepInfo}>
                    <p>Bed Time: 
                        <input 
                            name='bedTime' 
                            type="time"
                            // value={this.state.username} 
                            // onChange={this.state.username}
                        />
                    </p> 
                    <p>Wake Time: 
                        <input 
                            name='wakeTime' 
                            type="time"
                            // value={this.state.username} 
                            // onChange={this.state.username}
                        />
                    </p>
                    <p>Tired Rating at Bedtime: 
                        <img src="../../img/1.png" alt="sad face"/>
                        <img src="../../img/2.png" alt="neutral face"/>
                        <img src="../../img/3.png" alt="happy face"/>
                        <img src="../../img/4.png" alt="very happy face"/>
                    </p>
                    <p>Mood Rating when Waking:
                        <img src="../../img/1.png" alt="sad face"/>
                        <img src="../../img/2.png" alt="neutral face"/>
                        <img src="../../img/3.png" alt="happy face"/>
                        <img src="../../img/4.png" alt="very happy face"/>
                    </p>
                    <p>Overall Mood for the Day:
                        <img src="../../img/1.png" alt="sad face"/>
                        <img src="../../img/2.png" alt="neutral face"/>
                        <img src="../../img/3.png" alt="happy face"/>
                        <img src="../../img/4.png" alt="very happy face"/>
                    </p>
                    <button>Enter</button>
                </form>
            </div>
        )
    }
}