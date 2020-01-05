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
import NewOrder from './Components/molecules/NewOrder';
import OrderCard from './Components/molecules/OrderCard';
import OrderItem from './Components/molecules/OrderItems';
import Pizzas from './Components/molecules/PizzasMenu';

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
        </div>

      </div>

    )
  }
}

const principalDiv = {
  background: '#FBC02D',
  display: 'flex',
  width: '100%',
  height: '768px',
}

export default App;