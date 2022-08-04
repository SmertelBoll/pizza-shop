import React, { useEffect } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

import axios from 'axios'

import { Route, Routes } from 'react-router-dom';

import './scss/App.scss';
import { useSelector, useDispatch } from 'react-redux';

function App() {
   const dispatch = useDispatch()

   const [items, setItems] = React.useState([])
   useEffect(() => {
      fetch('http://626d16545267c14d5677d9c2.mockapi.io/items')
         .then(res => {
            return res.json()
         }).then(arr => {
            setItems(arr)
         })
   }, [])

   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <Routes>
               <Route path='/' element={<Home items={items} />} />
               <Route path='cart' element={<Cart />} />
            </Routes>
         </div>
         <Footer />
      </div>

   )
}

export default App