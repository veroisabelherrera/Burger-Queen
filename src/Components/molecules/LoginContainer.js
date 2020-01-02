import React, { Component } from 'react'
import fire from '../../config/Fire'

//Components
import Inputs from '../atoms/Inputs'
import Button from '../atoms/Button'
import H3 from '../atoms/H3'
import H1 from '../atoms/H1'




export default class LoginContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Bienvenido',
            loginBtn: true
        };
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
       
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({ fireErrors: error.message })
            })

    }
    render() {

        const text = {
            textOne: 'Correo Electronico',
            textTwo: 'Contraseña',
            textThree: 'Entrar',
            textFour: 'Bienvenido!',
            textFive: 'Ingresa tus datos para comenzar',

        }

        let errorNotification = this.state.fireErrors ?
            (<div>{this.state.fireErrors}</div>) : null;


        return (


            <div>
                <div className='title'>
                    <H1 title={this.state.formTitle} />
                    <H3 title={text.textFive} />
                </div>
                {errorNotification}
                <div className='form'>
                    
                    <Inputs
                        name="email"
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        title={text.textOne}
                    />

                    <Inputs
                        name="password"
                        type='password'
                        value= {this.state.password}
                        onChange={this.handleChange}
                        title={text.textTwo}
                    />

                </div>
                <div className='Btns'>
                    <Button title={text.textThree} style={btnOne} onClick={this.login} />
                    </div>
            </div>

        )
    }
}

const btnOne = {
    background: '#fff',
    fontSize: '16px',
    color: '#ea2027'

}
