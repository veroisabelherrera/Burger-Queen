import React, { Component } from 'react';

import 'firebase/database';


import './App.css'; 

import { BrowserRouter as Router, Route } from 'react-router-dom'

//componente
import OrganismLogin from './components/organisms/OrganismLogin';
import Register from './components/organisms/Register'
import GarzonView from './components/organisms/GarzonView';
// import NavBar from './components/molecules/NavBar';

class App extends Component {

  render() {
    return (
      <Router>
        <div style={principalDiv}>
          
          <Route exact path="/" component={OrganismLogin}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/mesero" component={GarzonView}></Route>
        </div>
      </Router>
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