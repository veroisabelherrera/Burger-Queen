import React, { Component } from 'react'
//Components
import ButtonsContainer from '../molecules/ButtonsContainer'
import Header from '../molecules/Header'


export default class Organism extends Component {
    render() {
        return (
            <div>
                <Header />
                <ButtonsContainer/>
            </div>
        )
    }
}
