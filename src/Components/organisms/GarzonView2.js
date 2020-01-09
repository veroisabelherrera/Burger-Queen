import React, { Component } from 'react';
import Pizzas from '../molecules/MenuPizzas';
import Picoteos from '../molecules/MenuPicoteo';
import Shops from '../molecules/MenuBebestibles';
//import NewOrder from '../molecules/NewOrder';


export default class ViewGarzon extends Component {
  render() {
    return (
      <div>
        <h3>Titulo Garzon View</h3>
        <h4>Nro. Mesa seleccionada</h4>
        <Pizzas />
        <Picoteos />
        <Shops />
      </div>
    )
 }
}