import React, { Component } from 'react'

export default class InputName extends Component {

    constructor(props){
        super(props)
        this.state={
            name:'',
        }
    }
    name= (e)=>{
        e.push=({
            name:e.name
        })
    }
    // handleChange = e => {
    //     e.preventDefault();
    //     this.setState({[e.target.name]: e.target.value});
       
    // }
    render() {
        return (
            <div>
                <input name={this.state.name} 
                style={this.props.style}
                value={this.name} 
                type ='text' 
                onChange={this.props.onChange}
                placeholder='Ingresa tu nombre'>   
                </input>
            </div>
        )
    }
}


