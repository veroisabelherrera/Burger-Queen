import React, { Component } from 'react'

import NavBar from '../molecules/NavBar'
import ConNumberTable from '../molecules/ConNumberTable'
import ContResumeOrder from '../molecules/ContResumeOrder'

export default class GarzonTable extends Component {
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
            <ConNumberTable/>
          </div>  
    
          <div>
            <ContResumeOrder/>
          </div>
        </div>
      </div>



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