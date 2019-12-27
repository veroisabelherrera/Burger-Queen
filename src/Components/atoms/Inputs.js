import React, { Component } from 'react'

export default class Inputs extends Component {
    render() {
        return (
            <div>
                <input placeholder={this.props.title} onChange={this.props.change}></input>
            </div>
        )
    }
}
