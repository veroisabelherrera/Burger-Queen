import React from 'react';

class OrderItems extends React.Component {
  render() {
    return (
      <div className='order-items-row'>
      <div className='order-items-count-col'>
          <p>{this.props.count}</p>
      </div>
      <div className='order-items-name-col'>
        <p>{this.props.name} </p>
      </div>
      <div className='order-items-value-col'>
      <p>${this.props.value}</p>
      </div>
      <div className='order-items-btn-col'>
      <button className="btn-delete" onClick={() => this.props.delete(this.props.id)}>X</button>
      </div>
      </div>
    )
  }
}

export default OrderItems;