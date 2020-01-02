import React, { Component } from 'react'
import fire from '../../config/Fire'

//componentes
import Button from '../atoms/Button'


export default class RegisterContainer extends Component {

    out = e => {
        e.preventDefault();
        fire.auth().signOut().then(function() {
          }).catch(function(error) { 
          });
    }

    render() {
        return (
            <div>
                Hola
                <Button title={"Salir"}  onClick={this.out} />
            </div>
        )
    }
}
