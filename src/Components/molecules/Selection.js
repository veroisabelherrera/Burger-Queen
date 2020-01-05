import React, { Component } from 'react'
import fire from '../../config/Fire'
//Componentes
import Button from '../atoms/Button'
import Inputs from '../atoms/Inputs'

export default class Selection extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            bntMesero: '',
        };
    }
   
    register= ()=>{
        
        return(<div>
            <Inputs style={input} title='Ingresa tu nombre'/>
            <Button style={btnOne} title='Entrar'/>
        </div>)
    }
    out = e => {
        e.preventDefault();
        fire.auth().signOut().then(function() {
          }).catch(function(error) { 
          });
    }
    
    
    
    render() {
        return (
            <div style={btns}>
                <Button style={btnOne} title='Mesero'  onClick={this.register}/>
                <Button style={btnOne} title='Cocina' name={this.state.bntCocina}/>
                <div style={btnOuts}> 
                <Button title={"Salir"} style={btnOut}  onClick={this.out}/>
                </div>
                
            </div>
            
        )
    }
}
const btns={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
    marginTop:'5%',
    flexDirection:'column'
}

const input={
    width: '100%',
    height: '25px',
    marginTop :'2%',
    borderRadius:'15px',
    background:'#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#4b4949',
    textAlign: 'center',
    fontSize: '20px',
}

const btnOne = {
    background: '#002B8A',
    fontSize: '30px',
    width: '200px',
    height: '40px',
    borderRadius:'15px',
    marginTop:'15%',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
}

const btnOuts={
    
    alignItems:'center',
    display:'flex',
    marginTop:'5%',
    flexDirection:'column'

}
const btnOut = {
    background: '#FE5900',
    fontSize: '25px',
    width: '150px',
    height: '35px',
    borderRadius:'15px',
    marginTop:'15%',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    
}