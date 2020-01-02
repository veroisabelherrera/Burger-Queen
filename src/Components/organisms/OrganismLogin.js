import React, { Component } from 'react'
import fire from '../../config/Fire';
//componentes
import Header from '../molecules/Header'
import LoginContainer from '../molecules/LoginContainer'
import RegisterConteiner from '../molecules/RegisterContainer'

export default class OrganismLogin extends Component {
    // con el constructor aseguramos que el estado inicial sea uno en especifico
    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.authListener();
    }

    //   //se crea funcion de escuchador de usuario
    authListener() {

        fire.auth().onAuthStateChanged((user) => {
            //si el estado de USER cambia 
            if (user) {
                this.setState({ user });
            } else {
                //si el estado no cambia
                this.setState({ user: null });
            }
        })
    }

    render() {
        return (

            <div>
                <Header />
                <div>
                    {this.state.user ? (<RegisterConteiner />) : (<LoginContainer/>)}
                </div>
            </div>
        )
    }


}
