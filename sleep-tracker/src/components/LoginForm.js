import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import axiosConfig from './AxiosConfig'
// import { Route, Router, withRouter, NavLink } from 'react-router-dom'



const LoginFormContainer = styled.div`
    background: #8b849c;
`

class LoginForm extends React.Component{
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    login = e => {
        e.preventDefault()

        axios.post('https://build-week-sleep-tracker.herokuapp.com/api/auth/login', this.state, axiosConfig)
            .then(res => {localStorage.setItem('token', res.data.token)})
            .catch(err => console.log(err))

        this.props.history.push("/sleepview")
    }



    render(){
        return(
            <LoginFormContainer>
                <form onSubmit={this.login}>
                    <input 
                        name='email' 
                        type="text"
                        value={this.state.email} 
                        onChange={this.handleChange}
                    />
                    <input 
                        name='password' 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>submit</button>
                </form>
            </LoginFormContainer>
        )
    }

}

export default LoginForm