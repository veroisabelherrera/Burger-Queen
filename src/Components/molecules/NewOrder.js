
import React, { Component } from 'react';
import OrderItems from './OrderItems';
import Pizzas from './PizzasMenu';


class NewOrder extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Pizzas />
      </div>
    )
  }
}














/*
class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.orderId = props.orderId;
    this.orderContent = props.orderContent;
  }

  render() {
    return (
      <div className="Order">
        <li>{this.orderId} - {this.orderContent}</li>
      </div>
    )
  }
}

export default NewOrder;
*/









/*
class NewOrder extends React.Component{
  constructor(props) {
    super(props);
    this.total = this.total.bind(this);
  }

  total() {
    return this.props.list.reduce(function(valorAnterior, valorActual) {
      return valorAnterior + valorActual.value;
    },0)
  }

  render() {
    return (
      <div className="orderBody">
        {this.props.list.map(element=><OrderItems count={element.count} name={element.name} value={element.value} key={element.id} id={element.id} delete={this.props.delete}/>)}
        <p className='p-total-order'>Total ${this.total()}</p>
      </div>
    )
  }
}

export default NewOrder;
*/






/*
const NewOrder = ({list = []}) =>  {
  const total = () =>  {
    return list.reduce(function(valorAnterior, valorActual) {
      return valorAnterior + valorActual.value;
    },0)
  }

  return (
    <div>
      {list.map(element=><OrderItems count={element.count} name={element.name} value={element.value} key={element.id} id={element.id} />)}
      <p className='p-total-order'>Total ${total()}</p>
    </div>
  )
}

export default NewOrder;
*/