import React, { Component } from 'react';

class OrderItem extends Component {
  constructor(){
    super();
    this.state = {
      orders: [],
      type: "",
      ingredients: "",
      price: "",
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const itemType = this.props.type;
    const itemIngredients = this.props.ingredients;
    const itemPrice = this.props.price;
    console.log(itemType, itemIngredients, itemPrice);
  }

  render(){
    return (
      <button className = 'item-btn' onClick={this.handleClick} >
        <div className='item-type'><p>{this.props.type}</p></div>
        <div className='item-ingredients'><p>{this.props.ingredients}</p></div>
        <div className='item-price'><p>{this.props.price}</p></div>
      </button>
    )
  }
}

export default OrderItem;