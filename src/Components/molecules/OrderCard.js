import React from 'react';
import NewOrder from './NewOrder'







/*
class OrderCard extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [
        { orderId: 1, orderContent: 'order 1' },
        { orderId: 1, orderContent: 'order 1' }
      ]
    };
  }
  render() {
    return (
      <div className="orderBody">
        <ul>
          {
            this.state.orders.map(order => {
              return (
                <NewOrder 
                orderContent={order.orderContent}
                orderId={order.orderId}
                key={order.orderId} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default OrderCard;
*/




/*
class OrderCard extends React.Component {
  render(){
    return (
      this.props.data !== undefined ? this.props.data.map(el =>
        <div className='order-kitchen' key={el.data.id}>
          <p>{new Date(el.data.time).toLocaleDateString()+"    "+new Date(el.data.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
          <p>{"Mesa: "+el.data.client}</p>
          {el.data.list.map(e=>
          <p className='order-kitchen-element' key={e.name+e.id}>{e.count+"  x  "+e.name}</p> )}
          <div className='template-order'>
              <button className='btn-order-template' onClick={()=>this.props.changeReadyStatus(el.data.id)}>Listo</button>
          </div>
        </div>
      ): <p></p>
    )
  }
}
export default OrderCard;
*/