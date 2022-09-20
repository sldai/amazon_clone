import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import '@stripe/stripe-js';
import axios from 'axios';
import { ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CheckoutProduct from '../components/CheckoutProduct';
import { emptyBasket } from '../features/basket/basketSlice';
import { totalAmount } from '../features/basket/basketUtils';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import './Payment.css';
import { db } from '../features/firebase';

function Payment() {
  const { user } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post(
        process.env.REACT_APP_FUNCTIONS_URL + `/payments/create?total=${totalAmount({ items }) * 100}`, 
      );
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [items]);

  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setProcessing(true);
    try {
      const payload = await stripe!.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements!.getElement(CardElement)!,
        },
      });

      await setDoc(doc(db, 'users', user!.id, 'orders', payload.paymentIntent!.id), {
        items,
        amount: totalAmount({ items }),
        created: payload.paymentIntent?.created,
      });
      setSucceeded(true);
      setError('');
      setProcessing(false);
      dispatch(emptyBasket());
      navigate('/orders', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>Checkout {items.length} items</h1>
        <div className='payment-section'>
          <h3 className='payment-title'>Delivery Address</h3>
          <p className='payment-address'>
            {user && <p>user.email</p>}
            <p>123 Reac Lane</p>
            <p>Los Angeles, CA</p>
          </p>
        </div>

        <div className='payment-section'>
          <h3 className='payment-title'>Review items and delivery</h3>
          <div className='payment-items'>
            {items.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                imageSrc={item.imageSrc}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className='payment-section'>
          <h3 className='payment-title'>Payment Method</h3>
          <div className='payment-details'>
            <form onSubmit={handleSubmit}>
              <CardElement
                onChange={(e) => {
                  setDisabled(e.empty);
                  setError(e.error ? e.error.message : '');
                }}
              />
              <div className='payment-price-container'>
                <h3>Order Total {formatter.format(totalAmount({ items }))}</h3>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
