import React, { Component } from 'react';
import OrderItem from './OrderItems';
import Picoteo from '../../data/data';



class Picoteos extends Component {
    constructor() {
        super();
        this.state = {
            Picoteo: Picoteo,
            orders: []
        }
    }

    render() {
        const PicoteoItems = Picoteo.Picoteo.map(elem => {
            return (
                <OrderItem
                    key={elem.id}
                    type={elem.type}
                    ingredients={elem.ingredients}
                    price={elem.price}
                />
            )
        });

        return(
            <div>
                {PicoteoItems}
            </div>
        )
    }
}

export default Picoteos;
