import React from 'react';
import { totalAmount } from '../features/basket/basketUtils';
import CheckoutProduct from './CheckoutProduct';
import './Order.css';

function Order({ order }: { order: any }) {
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>Created at {order.data.created}</p>
      <p className='order-id'><small>{order.id}</small>
      </p>
      {order.data.items?.map((item: any) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
          price={item.price}
          rating={item.rating}
        />
      ))}
      {order.data.items && <strong>{'total: '+formatter.format(order.data.amount)}</strong>}
    </div>
  );
}

export default Order;
