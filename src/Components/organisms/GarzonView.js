import React, { Component } from 'react'


import NavBar from '../molecules/NavBar'
import ContNewOrder from '../molecules/ContNewOrder'
import ContResumeOrder from '../molecules/ContResumeOrder'



export default class GarzonView extends Component {
  render() {

    const {name} = {...this.props.location.state}
    return (
      <div>
        
      {/* pasar props */}
        <NavBar name={name}/>
        <div>
          <ContNewOrder/>
        </div>

        <div>
          <ContResumeOrder/>
        </div>

      </div>
    )
  }
}



