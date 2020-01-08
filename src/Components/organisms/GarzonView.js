import React, { Component } from 'react'

import NavBar from '../molecules/NavBar'
import ContNewOrder from '../molecules/ContNewOrder'
import ContResumeOrder from '../molecules/ContResumeOrder'



export default class GarzonView extends Component {
  render() {

    const {name} = {...this.props.location.state}
    return (
      <div style={principalDiv}>
        <div>
        {/* pasar props */}
          <NavBar name={name}/>
        </div>
        <div style={contMenu}>
          <div>
            <ContNewOrder/>
          </div>  
    
          <div>
            <ContResumeOrder/>
          </div>
        </div>
      </div>

// import React, { Component } from 'react';
// import Pizzas from '../molecules/PizzasMenu';
// import Picoteos from '../molecules/PicoteoMenu';
// import Shops from '../molecules/BebestiblesMenu';
// import NewOrder from '../molecules/NewOrder';


// class ViewGarzon extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Titulo Garzon View</h3>
//         <h4>Nro. Mesa seleccionada</h4>
//         <Pizzas />
//         <Picoteos />
//         <Shops />
//       </div>


    )
  }
}

const principalDiv={
  
  width: '100%',
  height: '768px'
}


const contMenu={
  display:'flex',
  height:'80%'

}
