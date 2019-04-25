import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import axios from 'axios';
// import PropTypes from 'prop-types'
import styled from 'styled-components'
// import SleepSession from './SleepSession'

import {dummyData} from '../dummydata'
import SleepForm from './SleepForm'
import SleepCard from './SleepCard'

import axiosConfig from './AxiosConfig'


const SleepCardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background: #756d89;
    margin: 0;
`
const HeaderDiv = styled.div`
    background: #343a40;
    color: white;
    margin: 0;
    padding: 10px 0;
`

class SleepList extends Component {
    constructor() {
        super()

        this.state = {
            dataArray: [],
            dummyArray: []
        }
    }
    componentDidMount() {
        axios.get( 'https://build-week-sleep-tracker.herokuapp.com/api/users', axiosConfig )
            .then( res => {
                console.log(res);
                
                this.setState( { dataArray: res.data[0].data, dummyArray: dummyData } )//res.data[0].data
            } )
            .catch( err => { console.error( err ) } )
    }

    deleteCard = id => {
        axios.delete( `https://build-week-sleep-tracker.herokuapp.com/api/users/data/delete/${id}` )
                .then( res => console.log( res ) )
                .catch( err => console.log( err ) )
    }

    render() {
        console.log(this.state.dataArray);
        
        return (
            <div>
                <HeaderDiv>
                {/* <NavLink to='/sleepform'>Log New Sleep Session</NavLink> */}
                <h1>List of Sleep Data for the Week</h1>
                </HeaderDiv>
                <SleepCardContainer>
                    {this.state.dataArray.map( (session, index) => (
                        <SleepCard {...this.props} session={session} key={session.id} index={index} deleteCard={this.deleteCard} />
                    ))}
                </SleepCardContainer>
                {/* <hr/> */}
                <SleepForm dummyArray={this.state.dataArray} />
            </div>
        )
    }
}

export default SleepList