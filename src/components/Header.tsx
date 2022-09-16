import React from 'react';
import './Header.css';
import { Search, ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Header() {
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
        <div className='header-option'>
          <span className='header-option-line-one'>Hello</span>
          <span className='header-option-line-two'>Sign in</span>
        </div>
        <div className='header-option'>
          <span className='header-option-line-one'>Returns</span>
          <span className='header-option-line-two'>& Orders</span>
        </div>
        <div className='header-option'>
          <span className='header-option-line-one'>Your</span>
          <span className='header-option-line-two'>Prime</span>
        </div>
      </div>

      <Link to='/checkout'>
        <div className='header-option-basket'>
          <ShoppingBasket />
          <span className='header-option-line-two header-basket-count'>0</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
