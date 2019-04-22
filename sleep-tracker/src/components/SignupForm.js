import React from 'react';
import axios from 'axios';

export default class SignupForm extends React.Component{

    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    login = e => {
        e.preventDefault()
        localStorage.setItem("username", this.state.username)
        localStorage.setItem("password", this.state.password)
        this.setState({username: '', password: ''})
    }

    render(){
        return(
            <div>
                <h1>Sign In</h1>
                <form onSubmit={e => this.login(e)}>
                    <p>Name: <input 
                                    name='name' 
                                    type="text"
                                    value={this.state.username} 
                                    onChange={this.state.username} 
                                />
                                </p>
                    <p>Email: <input 
                                    name='email' 
                                    type="email"
                                    value={this.state.password} 
                                    onChange={this.state.password} 
                                />
                            </p>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}