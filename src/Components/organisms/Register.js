import React, { Component } from 'react'



import Header from '../molecules/Header'
import NameRegistrer from '../molecules/NameRegistrer'

export default class Register extends Component {
    render() {
        return (
            <div style={principalDiv}>
                <Header/>
                <NameRegistrer/>

            </div>
        )
    }
}

const principalDiv={
    background: '#FBC02D',
    width: '100%',
    height: '768px'
}