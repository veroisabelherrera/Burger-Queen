import React, { Component } from 'react'


import NavBar from '../molecules/NavBar'
export default class GarzonView extends Component {
  render() {

    const {name} = {...this.props.location.state}
    return (
      <div>
        Esto es GarzonView
      {/* pasar props */}
        <NavBar name={name}/>

      </div>
    )
  }
}



