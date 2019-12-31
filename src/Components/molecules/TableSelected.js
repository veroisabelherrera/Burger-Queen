import React, { Component } from 'react';

class TableSelected extends Component{
  render() {
    return (
      <form className="client-input">
        <label>
          Mesa:
        </label>
        <input placeholder="Nro. Mesa" className="name-input"value={this.props.client} onChange={this.props.changeClient} />
      </form>
    );
  }
}

export default TableSelected;