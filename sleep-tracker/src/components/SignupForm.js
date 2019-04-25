import React from 'react';
import axios from 'axios';
// import { Route, Router, withRouter, NavLink } from 'react-router-dom'
// import axiosConfig from './AxiosConfig'
import styled from 'styled-components'


const SignupFormContainer = styled.div`
    background: #8b849c;
    padding: 40px 0;
`

export default class SignupForm extends React.Component{

    state = {
        email: '',
        password: '',
        name: '',
        lastName: ''
        // age: 99
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    login = e => {
        e.preventDefault()
        console.log(this.state);
        
        axios.post('https://build-week-sleep-tracker.herokuapp.com/api/auth/register', this.state)//, axiosConfig
            .then(res => console.log(res))
            .catch(err => console.log(err))

        this.props.history.push("/login")
    }

    render(){
        return(
            <SignupFormContainer>
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
                    <button type='submit'>Login</button>
                </form>
            </SignupFormContainer>
        )
    }
}