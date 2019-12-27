import React, { Component } from 'react'


import Header from '../molecules/Header'
import LoginContainer from '../molecules/LoginContainer'

export default class OrganismLogin extends Component {
    render() {
        return (
            <div>
                <Header />
                <LoginContainer/>
            </div>
        )
    }
}
