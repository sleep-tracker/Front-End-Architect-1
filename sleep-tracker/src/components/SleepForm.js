import React from 'react';
import axios from 'axios';

export default class SignupForm extends React.Component{
    constructor(){
        super()

        this.state = {
            hoursSlept: '',
            tiredAtBedtime: '',
            moodWhenWaking: '',
            overallMoodForDay: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div>
                <h1>New Sleep Session</h1>
                <form>
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
                    <p>Tired Rating at Bedtime: :) :| :( :0</p>
                    <p>Mood Rating when Waking: :) :| :( :0</p>
                    <p>Overall Mood for the Day :) :| :( :0</p>
                    <button>Enter</button>
                </form>
            </div>
        )
    }
}