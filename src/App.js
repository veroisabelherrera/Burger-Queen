import React, { Component } from 'react';
import firebase from 'firebase';
import { config } from './config/Fire';
import 'firebase/database';

import './App.css';
//import Auth from './Auth';
//import { useUser } from 'reactfire';
//import { BrowserRouter as Router, Route } from 'react-router-dom'

//componente
import OrganismLogin from './Components/organisms/OrganismLogin';
import Pizzas from './Components/molecules/PizzasMenu';
import Picoteos from './Components/molecules/PicoteoMenu';
import Shops from './Components/molecules/BebestiblesMenu';

class App extends Component {

  render() {
    return (
      <div className="principalContainer">

        <div style={principalDiv}>
          <OrganismLogin />
        </div>

        <div className="orderContainer">
          <h2>Titulo del Order Container</h2>
          <Pizzas />
          <Picoteos />
          <Shops />
        </div>

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