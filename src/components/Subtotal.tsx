import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { totalAmount } from '../features/basket/basketUtils';
import './Subtotal.css';

function Subtotal() {
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const basket = useAppSelector((state) => state.basket);
  const navigate = useNavigate();

  return (
    <div className='subtotal'>
      <p>
        Subtotal ({basket.items.length} items):
        <strong>{formatter.format(totalAmount(basket))}</strong>
      </p>
      <label className='subtotal-gift'>
        <input type='checkbox' />
        <small>This order contains a gift</small>
      </label>

      <button onClick={() => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
