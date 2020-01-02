import React, { Component } from 'react'

export default class H3 extends Component {
    render() {
        return (
            <div>
                <h3 style={this.props.style}>{this.props.title}</h3>
            </div>
        )
    }
}
