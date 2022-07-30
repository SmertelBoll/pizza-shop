import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

import './scss/App.scss';

function App() {
   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <Home />
            {/* <Cart /> */}
         </div>
         <Footer />
      </div>

   )
}

export default App