import React from 'react'
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

import './scss/App.scss';

function App() {
   return (
      <div class="wrapper">
         <Header />
         <div class="content">
            <Home />
         </div>
      </div>

   )
}

export default App