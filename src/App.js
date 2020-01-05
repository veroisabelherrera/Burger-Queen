import React, { Component } from 'react';


import './App.css'; 
//import Auth from './Auth';
//import { useUser } from 'reactfire';
//import { BrowserRouter as Router, Route } from 'react-router-dom'

//componente
import OrganismLogin from './components/organisms/OrganismLogin';

class App extends Component {
  
  render() {
    return (

      <div style={principalDiv}>
        <OrganismLogin/>
      </div>
    )
  }
}

const principalDiv={
  
  display: 'flex',
  width: '1024px',
  height: '768px',
  alignContent:'center',
    
}

export default App;