import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal';
import './Checkout.css';

function Checkout() {
  const basket = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <h2 className='checkout-title'>Shopping Basket</h2>
        {basket.items.map((item, index) => (
          <>
          <CheckoutProduct
            id={item.id}
            title={item.title}
            rating={item.rating}
            imageSrc={item.imageSrc}
            price={item.price}
          />

          </>
          
        ))}
      </div>

      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
