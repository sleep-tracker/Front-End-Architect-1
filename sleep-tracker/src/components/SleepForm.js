import React from 'react';
import axios from 'axios';

export default class SignupForm extends React.Component{
    constructor(){
        super()

        this.state = {
            //
        }
    }

    render(){
        return(
            <div>
                <h1>New Sleep Session</h1>
                <form>
                    <p>Bed Time: <input name='bedTime' type="time"/></p> 
                    <p>Wake Time: <input name='wakeTime' type="time"/></p>
                    <p>Tired Rating at Bedtime: :) :| :( :0</p>
                    <p>Average Mood for Day :) :| :( :0</p>
                    <button>Enter</button>
                </form>
            </div>
        )
    }
}