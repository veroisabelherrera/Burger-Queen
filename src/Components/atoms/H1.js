import React, { Component } from 'react'

export default class H1 extends Component {
    render() {
        return (
            <div>
                <h1 style={this.props.style}>{this.props.title} </h1>
            </div>
        )
    }
}
