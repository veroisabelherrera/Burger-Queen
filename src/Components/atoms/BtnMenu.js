import React, { Component } from 'react';


class BtnMenu extends Component {

    render() {
        return(
            <div className="btn-menu-container">
                <button
                onClick={this.props.clickItem.bind(this, this.props.product)}>
                    <div>
                        <h6>{this.props.product.type}</h6>
                        <h6>{this.props.product.price}</h6>
                    </div>
                </button>
            </div>
        )
    }
}


export default BtnMenu;