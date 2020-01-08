import React, { Component } from 'react';
import 'firebase/database';
import './App.css'; 

import { BrowserRouter as Router, Route } from 'react-router-dom'

//componente

import OrganismLogin from './components/organisms/OrganismLogin';
import Register from './components/organisms/Register'
import GarzonView from './components/organisms/GarzonView';
// import NavBar from './components/molecules/NavBar';



// import { BrowserRouter as Router, Route } from 'react-router-dom';

// //componente
// import OrganismLogin from './Components/organisms/OrganismLogin';
// import Register from './Components/organisms/Register';
// import Pizzas from './Components/molecules/PizzasMenu';
// import ViewGarzon from './Components/organisms/GarzonView';
// import NewOrder from './Components/molecules/NewOrder';

class App extends Component {

  render() {
    return (
      <Router>
        <div style={principalDiv}>
          

          <Route exact path="/" component={OrganismLogin}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/mesero" component={GarzonView}></Route>


          {/* <ViewGarzon />

          <NewOrder /> */}


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