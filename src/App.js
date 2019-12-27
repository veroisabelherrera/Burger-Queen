import React, { Component } from 'react';
import './App.css';
//import Organism from './components/organisms/Organism';
import Auth from './Auth';
import { useUser } from 'reactfire';

/*
class App extends Component {
  render(){
    return <div>
      <Organism />
    </div>
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
