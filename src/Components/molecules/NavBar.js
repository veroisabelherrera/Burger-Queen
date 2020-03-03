import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//componente
import Button from '../atoms/Button';
import H3 from '../atoms/H3';




export default class NavBar extends Component {
    

    render() {
        const { name } = this.props;
        return (
            <div style={navCont}> 
                <H3 title={name} style={nameWaiter}/>
                <Link to="/"><Button title='Salir' style={outBnt} /></Link>
            </div>
        )
    }
}

const navCont ={
    display: 'flex',
    justifyContent:'space-between',
    with:'100%',
    alignItems:'center',
    background:'#FE5900',
    height: '68px'
    
}
const nameWaiter={
    fontFamily: 'Roboto',
    color:'#FFFFFF',
    fontSize: '25px',
    marginLeft:'30px',
}

const outBnt={
    
    color:'#FFFFFF',
    fontSize: '23px',
    fontFamily: 'Roboto',
    marginRight:'30px',
}