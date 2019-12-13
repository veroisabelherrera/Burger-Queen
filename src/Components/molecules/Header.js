import React, { Component } from 'react'
import Logo from '../../assets/logo.png'

//Componentes
import Image from '../atoms/image'

export default class Header extends Component {
    
    render() {
        
        

        return (
            <div>
                <Image src={Logo}/>
            </div>
        )
    }
}
