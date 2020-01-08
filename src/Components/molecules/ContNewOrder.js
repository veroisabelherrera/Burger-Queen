import React, { Component } from 'react'
import Button from '../atoms/Button'
import H1 from '../atoms/H1'
import H3 from '../atoms/H3'



export default class ContNewOrder extends Component {
    
    
    render() {
        return (
            <div style={contPrincipal}>
                <H1 title ='Tomar nuevo pedido' style={contPedido}/>
                <H3 title ='Selecciona sector de trabajo' style={contPedido1}/>
                <Button title ='Sector A' style={btnArea}/>
                <Button title ='Sector B' style={btnArea}/>
                <Button title ='Sector C' style={btnArea}/>
                <Button title ='Sector D' style={btnArea}/>
            </div>
        )
    }
}
 
const contPrincipal={
    display:'flex',
    flexDirection:'column',
    width:'512px',
    background:'#FBC02D',
    alignItems:'center',
    height: '700px'
}

const contPedido={
    fontFamily:'Roboto',
    color:'#002B8A',
    fontSize:'30px',
    fontWeight:'bold',
    marginTop:'25%'

}
const contPedido1={
    fontFamily:'Roboto',
    color:'#002B8A',
    fontSize:'20px',
    marginTop:'10%'
    

}
const btnArea={
    background: '#002B8A',
    borderRadius: '15px',
    marginTop:'15%',
    width:'180px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '26px',
    textAlign: 'center',
    color: '#FFFFFF',
}