import React, { Component } from 'react';
import fire from '../../config/Fire'
import { Link } from 'react-router-dom';
//componentes
import Inputs from '../atoms/Inputs';
import Button from '../atoms/Button';

export default class NameRegistrer extends Component {
    
    out = e => {
        e.preventDefault();
        fire.auth().signOut().then(function() {
          }).catch(function(error) { 
          });
    }
    
    render() {
        return (
            <div style={divRegis}>
                <Inputs style={input} title='Ingresa tu nombre' />
                <Button style={btnOne} title='Entrar' />
                <Link to="/"><Button style={btnOut} title='Volver' /></Link>
            </div>
        )
    }
}

const divRegis={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
    height: '308px'
}

const input={
    width: '350px',
    height: '30px',
    marginTop :'8%',
    borderRadius:'15px',
    background:'#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#4b4949',
    textAlign: 'center',
    fontSize: '22px',
}    

const btnOne = {
    background: '#002B8A',
    fontSize: '30px',
    width: '170px',
    height: '35px',
    borderRadius: '15px',
    marginTop: '15%',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
}
const btnOut = {
    background: '#FE5900',
    fontSize: '28px',
    width: '150px',
    height: '35px',
    borderRadius:'15px',
    marginTop:'15%',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    
}
