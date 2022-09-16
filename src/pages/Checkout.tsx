import React from 'react';
import Subtotal from '../components/Subtotal';
import './Checkout.css';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <h2 className='checkout-title'>Shopping Basket</h2>
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
      </div>

      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
