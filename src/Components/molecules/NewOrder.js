
import React from 'react';
import OrderItems from './OrderItems';



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
