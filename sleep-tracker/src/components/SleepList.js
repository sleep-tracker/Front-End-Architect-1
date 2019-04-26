import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'

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
            sleepAverage: {}
        }
    }
    componentDidMount() {
        let possibleArray
        axios.get( 'https://build-week-sleep-tracker.herokuapp.com/api/users', axiosConfig )
            .then( res => {
                console.log( res )
                possibleArray = res.data[0].data
            } )
            .catch( err => { console.error( err ) } )

        if ( possibleArray ) {
            this.setState( { dataArray: possibleArray } )
        }

        axios.get( 'https://build-week-sleep-tracker.herokuapp.com/api/users/average', axiosConfig )
            // .then(res => console.log(res.data))
            .then( res => { this.setState( { sleepAverage: res.data } ) } )
            .catch( err => { console.error( err ) } )
    }

    deleteCard = id => {
        axios.delete( `https://build-week-sleep-tracker.herokuapp.com/api/users/data/delete/${ id }` )
            .then( res => console.log( res ) )
            .catch( err => console.log( err ) )
    }

    render() {
        console.log( this.state.dataArray );

        return (
            <div>
                <HeaderDiv>
                    <h1>{this.state.sleepAverage.bestSleep} hours</h1>
                </HeaderDiv>
                <SleepCardContainer>
                    {this.state.dataArray.map( ( session, index ) => (
                        <SleepCard {...this.props} session={session} key={session.id} index={index} deleteCard={this.deleteCard} />
                    ) )}
                </SleepCardContainer>
                <SleepForm />
            </div>
        )
    }
}

export default SleepList