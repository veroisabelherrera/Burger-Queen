import React, { Component } from 'react'

import Button from '../atoms/Button';
import H3 from '../atoms/H3'

export default class ConNumberTable extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            number1:'Mesa 1' ,
            number2:'Mesa 2',
            number3:'Mesa 3',
            number4:'Mesa 4',
            number5:'Mesa 5',
            number6:'Mesa 6',
            number7:'Mesa 7',
        }
    }
    
    handleChange = e => {
        e.preventDefault();
        this.state({ number1: e.target.value });
        //console.log(number1)

    }

    render() {
        const {number1} = this.state

        return (
        
            
            <div style={contPrincipal}>
                
                <H3 title ='Selecciona una mesa' style={contPedido1}/>
                <Button title ='Mesa 1' style={btnArea} value={number1} onClick={this.handleChange}/>
                <Button title ='Mesa 2' style={btnArea}/>
                <Button title ='Mesa 3' style={btnArea}/>
                <Button title ='Mesa 4' style={btnArea}/>
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