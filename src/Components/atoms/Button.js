import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
    <button onClick={this.props.click} style={this.props.style}>{this.props.title} </button>
            </div>
        )
    }
}
