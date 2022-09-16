import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { addToBasket } from '../features/basket/basketSlice';
import './Product.css';

type Props = {
  id?: string;
  title: string;
  imageSrc: string;
  price: number;
  rating: number;
};

function Product({ id, title, imageSrc, price, rating }: Props) {
  const dispatch = useAppDispatch();
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          {Array(Math.round(rating))
            .fill(0)
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>

      <img src={imageSrc} alt='' />

      <button
        className='product-button'
        onClick={() => {
          dispatch(addToBasket({
            id,
            title,
            imageSrc,
            price,
            rating,
          }));
        }}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
