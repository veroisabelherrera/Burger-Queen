import React, { Component } from 'react'
//Components
import Inputs from '../atoms/Inputs'
import Button from '../atoms/Button'
import Parraf from '../atoms/Parraf'


export default class LoginContainer extends Component {
   
    
    render() {
        const text = {
            textoUno : 'Nombre Usuario',
            textoDos : 'Contraseña',
            textoTres: 'Entrar',
            textoCuatro: '<-- Volver'
        }


        return (
            <div>
                <Inputs title={text.textoUno}/>
                <Inputs title={text.textoDos}/>
                <Button title ={text.textoTres} />
                <br/>
                <Parraf title={text.textoCuatro}/>
            </div>
        )
    }
}
