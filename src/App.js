import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import OrganismLogin from './components/organisms/OrganismLogin';

class App extends Component {
  render(){
    return (
      <Router>
        
        <Route path='/login' component={OrganismLogin}></Route>
      </Router>
    )
  
  }
}

export default App;
