import React ,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
// import SleepSession from './SleepSession'

import axiosConfig from './AxiosConfig'

class SleepList extends Component {
    constructor(){
        super()

        this.state = {
            userArray: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/users', axiosConfig)
            .then(res => {
                this.setState({ sleepSessions: res.data })
            })
            .catch(err => {console.error(err)})
    }

    render() {
        return (
            <div>
                <NavLink to='/sleepform'>Log New Sleep Session</NavLink>
                <h1>Sleep Moods for the Week</h1>
                    <div>
                        {this.state.userArray.map(session => (
                            <p>{session.name}</p>)
                        )}
                    </div>
            </div>
        )
    }
}

export default SleepList