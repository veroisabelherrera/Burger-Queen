import React, { Component } from 'react';


import './App.css'; 
//import Auth from './Auth';
//import { useUser } from 'reactfire';
//import { BrowserRouter as Router, Route } from 'react-router-dom'

//componente
import OrganismLogin from './Components/organisms/OrganismLogin';

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
  background: '#FBC02D',
  display: 'flex',
  width: '100%',
  height: '768px',
}

export default App;