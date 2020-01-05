import React, { Component } from 'react';
import firebase from 'firebase';
import { config } from './config/Fire';
import 'firebase/database';

<<<<<<< HEAD

import './App.css'; 

import { BrowserRouter as Router, Route } from 'react-router-dom'

//componente
import OrganismLogin from './components/organisms/OrganismLogin';
import Register from './components/organisms/Register'
=======
import './App.css';
//import Auth from './Auth';
//import { useUser } from 'reactfire';
//import { BrowserRouter as Router, Route } from 'react-router-dom'

//componente
import OrganismLogin from './Components/organisms/OrganismLogin';
import Pizzas from './Components/molecules/PizzasMenu';
import Picoteos from './Components/molecules/PicoteoMenu';
import Shops from './Components/molecules/BebestiblesMenu';
>>>>>>> efec5718764780a3b70f036f27653ec21a3bd318

class App extends Component {

  render() {
    return (
<<<<<<< HEAD
      <Router>
        <div style={principalDiv}>
          
          <Route exact path="/"> <OrganismLogin/></Route>
          <Route exact path="/register"> <Register/></Route>
          
        </div>
      </Router>
=======
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

>>>>>>> efec5718764780a3b70f036f27653ec21a3bd318
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