import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
