import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

import { Route, Routes } from 'react-router-dom';

import './scss/App.scss';

function App() {
   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='cart' element={<Cart />} />
            </Routes>
         </div>
         <Footer />
      </div>

   )
}

export default App