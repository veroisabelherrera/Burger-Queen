import React, { Component } from 'react';
import './App.css';
//import Organism from './components/organisms/Organism';
import Auth from './Auth';
import { useUser } from 'reactfire';



//import {BrowserRouter as Router, Route} from 'react-router-dom'
//import './App.css';
//import OrganismLogin from './components/organisms/OrganismLogin';

/*
export default class App extends Component {
  

  render(){
    const user = useUser();
    
    return (
       <div className="App">
        {user && <p>Bienvenido: { user.email } </p>}
        <Auth />
      </div>
    )
    
  
  }
}
*/

//Login con firebase - importando el componente de autentifiación

function App() {
  const user = useUser();

  return(
    <div className="App">
      {user && <p>Bienvenido: { user.email } </p>}
      <Auth />
    </div>
  );
}

export default App;




//Login con firebase - importando el componente de autentifiación

/* <Router>
        
        <Route path='/login' component={OrganismLogin}></Route>
      </Router> */