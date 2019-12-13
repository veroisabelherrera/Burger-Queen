import React, { Component } from 'react'
import Button from '../atoms/Button';

export default class ButtonsContainer extends Component {
    render() {
        

        const text = {
            textoUno : 'mesero',
            textoDos : 'cocina',
            textoTres : 'cocinero',
            textoCuatro : 'contraseña',
        }
        return (
            <div>
                <Button title={text.textoUno}  style={btnOne}/>
                <Button title={text.textoDos}/>
            </div>
        )
    }
}
const btnOne= {
    background: '#fff',
    fontSize: '16px',
    color: '#ea2027'

}