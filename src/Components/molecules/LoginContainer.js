import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//Components
import Inputs from '../atoms/Inputs'
import Button from '../atoms/Button'
import H3 from '../atoms/H3'
import H1 from '../atoms/H1'



export default class LoginContainer extends Component {
   
    
    render() {
        const text = {
            textOne : 'Nombre Usuario',
            textTwo : 'Contraseña',
            textThree: 'Entrar',
            textFour : 'Bienvenido!',
            textFive: 'Ingresa tus datos para comenzar'
        }


        return (
            <div>
                <H1 title={text.textFour}/>
                <H3 title={text.textFive}/>
                <br/>
                <Inputs title={text.textOne}/>
                <Inputs title={text.textTwo}/>
                <br/>
                <Link to='/'> 
                <Button title ={text.textThree} style={btnOne} />
                </Link>
               
                
            </div>
        )
    }
}
const btnOne= {
    background: '#fff',
    fontSize: '16px',
    color: '#ea2027'

}
