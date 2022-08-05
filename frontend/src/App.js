import React, { useEffect } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

import axios from 'axios'

import { Route, Routes } from 'react-router-dom';

import './scss/App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from './redux/slices/pizzaSlice';

function App() {
   const dispatch = useDispatch()

   const items = useSelector(state => state.pizza.items)
   const categoryId = useSelector(state => state.filter.categoryId)
   const sortBy = useSelector(state => state.filter.sortBy.backendName)

   useEffect(() => {
      fetch(`http://626d16545267c14d5677d9c2.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortBy}`)
         .then(res => {
            return res.json()
         }).then(arr => {
            dispatch(setItems(arr))
         })
   }, [categoryId, sortBy])

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