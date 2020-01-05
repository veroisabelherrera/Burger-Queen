import React, { Component } from 'react'
import fire from '../../config/Fire'

//Componentes
import Button from '../atoms/Button'
import { Link } from 'react-router-dom';


export default class Selection extends Component {
    constructor(props){
        super(props);
            this.state={
                mesero: true,
                cocina:true,
            }

    }
    
    out = e => {
        e.preventDefault();
        fire.auth().signOut().then(function() {
          }).catch(function(error) { 
          });
    }

    
    render() {
        
        return (
            <div style={btns}>
                <Link to="/register"><Button style={btnOne} title='Mesero'/></Link>
                
                <Button style={btnOne} title='Cocina' />
                <div style={btnOuts}> 
                <Button title={"Salir"} style={btnOut}  onClick={this.out}/>
                </div>
                
            </div>
            
        )
    }
}
const btns={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
    marginTop:'5%',
    flexDirection:'column'
}


const btnOne = {
    background: '#002B8A',
    fontSize: '30px',
    width: '200px',
    height: '40px',
    borderRadius:'15px',
    marginTop:'15%',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
}

const btnOuts={
    
    alignItems:'center',
    display:'flex',
    marginTop:'5%',
    flexDirection:'column'

}
const btnOut = {
    background: '#FE5900',
    fontSize: '25px',
    width: '150px',
    height: '35px',
    borderRadius:'15px',
    marginTop:'15%',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    
}