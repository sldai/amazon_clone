import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './features/auth/autoLogin';
import Payment from './pages/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './pages/Orders';

const stripe = loadStripe(
  'pk_test_51LjeOQD37ZksBom44jKYlY4vLwS0tRb2Ory8r6O0x6CFOtlkuzCOozCqu3njnsohhY09eEAeJbdkgzZ1rnwxMHk900w6JvGvnz'
);

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/payment'
          element={
            <Elements stripe={stripe}>
              <Payment />
            </Elements>
          }
        />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
