import React, { Component } from 'react'

export default class Parraf extends Component {
    render() {
        return (
            <div>
                <p style={this.props.style}>{this.props.title}</p>
            </div>
        )
    }
}