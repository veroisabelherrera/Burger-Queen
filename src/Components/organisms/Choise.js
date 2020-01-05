import React, { Component } from 'react'


import Selection from '../molecules/Selection'

export default class Choise extends Component {
    render() {
        return (
            <div style={principalDiv}>
                
                <Selection/>

            </div>
        )
    }
}

const principalDiv={
    background: '#FBC02D',
    display:'flex'
}
