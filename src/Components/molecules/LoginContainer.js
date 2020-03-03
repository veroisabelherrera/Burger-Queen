import React, { Component } from 'react'
import fire from '../../config/Fire'
import '../../styles/Header.css'

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
            formTitle: 'Bienvenido!',
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
            (<div style={error}>{this.state.fireErrors}</div>) : null;


        return (


            <div style={loginContainer}>
                <div style={title}>
                    <H1 title={this.state.formTitle} style={title1} />
                    <H3 title={text.textFive}  style={subtitle} />
                </div>
                {errorNotification}
                <div style={form}>
                    
                    <Inputs
                        name="email"
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        title={text.textOne}
                        style={input}
                    />

                    <Inputs
                        name="password"
                        type='password'
                        value= {this.state.password}
                        onChange={this.handleChange}
                        title={text.textTwo}
                        style={input}
                    />
                </div>   
                <div style={btns}>
                     <Button title={text.textThree} style={btnOne} onClick={this.login} />
                </div>
            </div>

        )
    }
}
 //style containers
const loginContainer={
    
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    width: '100%',
    height: '308px'
    
    
}

const title={

    width: '100%',
    height:'120px',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
}

const form={
    
    width: '100%',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'3%'
    
}

const btns={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    width: '100%',
    
}

const error={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    width: '50%',
    marginLeft:'25%',
    marginTop:'2%',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color:'#eb0d0d',
    fontSize: '25px',
    background:'#f1ecec',
   
}

//styles atoms components

const title1={
    
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color:'#002B8A',
    fontSize: '40px'
}

const subtitle={
    
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color:'#002B8A',
    fontSize: '25px',
    margin: '0 0 8% 0 '
    
}

const input={
    width: '350px',
    height: '30px',
    marginTop :'4%',
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
    fontSize: '22px',
    width: '200px',
    height: '40px',
    borderRadius:'15px',
    marginTop:'8%',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    
}