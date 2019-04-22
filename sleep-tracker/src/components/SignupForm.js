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
                <h1>Sign In</h1>
                <form>
                    <p>Name: <input name='name' type="text"/></p>
                    <p>Email: <input name='email' type="email"/></p>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}