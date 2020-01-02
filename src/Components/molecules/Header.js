import React, { Component } from 'react'
import Logo from '../../assets/logo.png'
//import '../../styles/Header.css'

//Componentes
import Image from '../atoms/image'

export default class Header extends Component {
    
    render() {
        
        

        return (
            <div style={header}>
                <Image style={logo} src={Logo}/>
            </div>
        )
    }
}

const header={
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop:'2%'
    
}

const logo={
    width: '40%'
}