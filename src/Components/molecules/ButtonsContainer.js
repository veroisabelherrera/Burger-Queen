import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Button from '../atoms/Button';
import H1 from '../atoms/H1';
import Parraf from '../atoms/Parraf'


export default class ButtonsContainer extends Component {

    render() {
        

        const text = {
            textoUno : 'Bienvenido!',
            textoDos : 'Elige tu perfil para empezar',
            textoTres : 'Mesero',
            textoCuatro : 'Cocina',
        }
        return (
            <div>
                <H1 title={text.textoUno}/>
                <Parraf title={text.textoDos}/>
                <Link to='/login'> 
                 <Button title={text.textoTres}  
                        style={btnOne}>
                </Button>
                </Link>
                <Button title={text.textoCuatro}/>
            </div>
        )
    }
}

const btnOne= {
    background: '#fff',
    fontSize: '16px',
    color: '#ea2027'

}