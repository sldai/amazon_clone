import React from 'react';
import './Subtotal.css';

function Subtotal() {
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  return (
    <div className='subtotal'>
      <p>
        Subtotal (0 items): <strong>{formatter.format(0)}</strong>
      </p>
      <label className='subtotal-gift'>
        <input type='checkbox' />
        <small>This order contains a gift</small>
      </label>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
