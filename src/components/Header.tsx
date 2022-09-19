import React from 'react';
import './Header.css';
import { Search, ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { signOut } from '../features/auth/authSlice';

function Header() {
  const basket = useAppSelector((state) => state.basket);
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
      </Link>
      <div className='header-search'>
        <input className='header-search-input' type='text' />
        <Search className='header-search-icon' />
      </div>

      <div className='header-nav'>
        {auth.user ? (
          <div className='header-option' onClick={() => dispatch(signOut())} style={{ cursor: 'pointer' }}>
            <span className='header-option-line-one'>
              Hello {(auth.user as any).displayName || (auth.user as any).email}
            </span>
            <span className='header-option-line-two'>Sign out</span>
          </div>
        ) : (
          <Link to='/login'>
            <div className='header-option'>
              <span className='header-option-line-one'>Hello</span>
              <span className='header-option-line-two'>Sign in</span>
            </div>
          </Link>
        )}

        <Link to='/orders'>
          <div className='header-option'>
            <span className='header-option-line-one'>Returns</span>
            <span className='header-option-line-two'>& Orders</span>
          </div>
        </Link>

        <div className='header-option'>
          <span className='header-option-line-one'>Your</span>
          <span className='header-option-line-two'>Prime</span>
        </div>
      </div>

      <Link to='/checkout'>
        <div className='header-option-basket'>
          <ShoppingBasket />
          <span className='header-option-line-two header-basket-count'>{basket.items.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
