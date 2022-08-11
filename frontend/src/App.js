import React, { useEffect } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

import axios from 'axios'

import { Route, Routes, useLocation } from 'react-router-dom';

import './scss/App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from './redux/slices/pizzaSlice';
import { selectFilterCategoryId } from './redux/slices/filterSlice';
import NonFound from './pages/NonFound';

function App() {
   const dispatch = useDispatch()

   const items = useSelector(state => state.pizza.items)
   const categoryId = useSelector(selectFilterCategoryId)
   const sortBy = useSelector(state => state.filter.sortBy.backendName)


   const location = useLocation();
   useEffect(() => {
      document.documentElement.scrollTo(0, 0);
   }, [location.pathname]);

   const getPizzas = async () => {
      dispatch(fetchPizzas({ categoryId, sortBy }))
   }


   useEffect(() => {
      getPizzas()
   }, [categoryId, sortBy])

   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <Routes>
               <Route path='/' element={<Home items={items} />} />
               <Route path='cart' element={<Cart />} />
               <Route path='*' element={<NonFound />} />
            </Routes>
         </div>
         <Footer />
      </div>

   )
}

export default App