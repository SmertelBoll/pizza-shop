import React from 'react'
import Category from './components/Category';
import Header from './components/Header';
import SortPopup from './components/SortPopup';
import Cart from './pages/Cart';
import Home from './pages/Home';

import './scss/App.scss';

function App() {
   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <div className="sort">
               <Category />
               <SortPopup />
            </div>
            <Home />
         </div>
      </div>

   )
}

export default App