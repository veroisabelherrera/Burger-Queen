import React, { Component } from 'react'
import Button from '../atoms/Button';
import H1 from '../atoms/H1';
import Parraf from '../atoms/Parraf'
import OrganismLogin from '../organisms/OrganismLogin'

export default class ButtonsContainer extends Component {
    
    PassPage=()=>{

        console.log("click");
        return <OrganismLogin/>
    }

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
                <Button title={text.textoTres}  style={btnOne} click ={this.PassPage()}/>
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