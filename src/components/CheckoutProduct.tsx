import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { removeFromBasket } from '../features/basket/basketSlice';
import './CheckoutProduct.css';

type Props = {
  id?: string;
  title: string;
  imageSrc: string;
  price: number;
  rating: number;
};

function CheckoutProduct({ id, imageSrc, title, price, rating }: Props) {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className='checkout-product'>
      <img src={imageSrc} alt='' />
      <div className='checkout-product-info'>
        <p className='checkout-product-title'>{title}</p>
        <p className='checkout-product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkout-product-rating'>
          {Array(Math.round(rating))
            .fill(0)
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
        <button className='product-button' onClick={onClick}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
