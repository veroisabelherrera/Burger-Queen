import React, { Component  } from 'react';


export default class Image extends Component{


  render() {

    return(
      <img src={this.props.src} alt="" style={this.props.style}/>
    )
  }
}