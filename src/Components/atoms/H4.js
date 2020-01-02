import React, { Component } from 'react'

export default class H4 extends Component {
    render() {
        return (
            <div>
                <h4 style={this.props.style}>{this.props.title}</h4>
            </div>
        )
    }
}
