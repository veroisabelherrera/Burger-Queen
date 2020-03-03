import React, { Component } from 'react'

export default class Inputs extends Component {
    render() {
        return (
            <div>
                <input name={this.props.name} 
                style={this.props.style}
                value={this.props.value} 
                type ={this.props.type} 
                onChange={this.props.onChange}
                placeholder={this.props.title}>   
                </input>
            </div>
        )
    }
}