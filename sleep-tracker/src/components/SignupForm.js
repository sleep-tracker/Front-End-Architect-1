import React from 'react';
import axios from 'axios';

import axiosConfig from './AxiosConfig'

export default class SignupForm extends React.Component{

    state = {
        email: '',
        password: '',
        name: '',
        lastName: '',
        age: 99
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    login = e => {
        e.preventDefault()
        console.log(this.state);
        
        axios.post('http://localhost:5000/api/auth/register', axiosConfig, this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.login}>
                    <p>Email: <input 
                                    name='email' 
                                    type="text"
                                    value={this.state.email} 
                                    onChange={this.handleChange} 
                                />
                                </p>
                    <p>Password: <input 
                                    name='password' 
                                    type="text"
                                    value={this.state.password} 
                                    onChange={this.handleChange} 
                                />
                            </p>
                    <p>First Name: <input 
                                    name='name' 
                                    type="text"
                                    value={this.state.name} 
                                    onChange={this.handleChange} 
                                />
                            </p>
                    <p>Last Name: <input 
                                    name='lastName' 
                                    type="text"
                                    value={this.state.lastName} 
                                    onChange={this.handleChange} 
                                />
                            </p>
                    <p>Age: <input 
                                    name='age' 
                                    type="number"
                                    value={this.state.age} 
                                    onChange={this.handleChange} 
                                />
                            </p>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}