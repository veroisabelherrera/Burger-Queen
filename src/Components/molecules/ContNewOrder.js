import React, { Component } from 'react'
import Button from '../atoms/Button'
import H1 from '../atoms/H1'
import H3 from '../atoms/H3'



export default class ContNewOrder extends Component {
    
    
    render() {
        return (
            <div>
                <H1 title ='Tomar nuevo pedido'/>
                <H3 title ='Selecciona sector de trabajo'/>
                <Button title ='Sector A'/>
                <Button title ='Sector B'/>
                <Button title ='Sector C'/>
                <Button title ='Sector D'/>
            </div>
        )
    }
}
