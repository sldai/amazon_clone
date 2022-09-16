import React from 'react';
import Product from '../components/Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          className='home-image'
          src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/711Y9Al9RNL._SX3000_.jpg'
          alt=''
        />
        <div className='home-row'>
          <Product
            title='Air Pods Pro'
            imageSrc='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71bhWgQK-cL._AC_UL480_QL65_.jpg'
            price={224}
            rating={4.7}
          />
          <Product
            title='Air Pods Pro'
            imageSrc='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71bhWgQK-cL._AC_UL480_QL65_.jpg'
            price={224}
            rating={5}
          />
          <Product
            title='Air Pods Pro'
            imageSrc='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71bhWgQK-cL._AC_UL480_QL65_.jpg'
            price={224}
            rating={5}
          />
        </div>

        <div className='home-row'>
          <Product
            title='Air Pods Pro'
            imageSrc='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71bhWgQK-cL._AC_UL480_QL65_.jpg'
            price={224}
            rating={5}
          />
          <Product
            title='Air Pods Pro'
            imageSrc='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71bhWgQK-cL._AC_UL480_QL65_.jpg'
            price={224}
            rating={5}
          />
          <Product
            title='Air Pods Pro'
            imageSrc='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71bhWgQK-cL._AC_UL480_QL65_.jpg'
            price={224}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
