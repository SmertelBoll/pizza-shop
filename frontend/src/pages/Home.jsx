import React from 'react'
import Category from '../components/Category'
import PizzaBlock from '../components/PizzaBlock'
import SortPopup from '../components/SortPopup'

import { useDispatch, useSelector } from 'react-redux'
import { fetchPizza } from '../redux/slices/pizzaSlice'

function Home({ items }) {
   return (
      <div className="home">
         <div className="home__sort">
            <Category />
            <SortPopup />
         </div>
         <h2 className="home__label">Всі піци</h2>
         <div className="home__pizzas">
            {
               items.map((obj) => (
                  <PizzaBlock
                     id={obj.id}
                     imageUrl={obj.imageUrl}
                     price={obj.price}
                     title={obj.title}
                     types={obj.types}
                     key={`${obj.id}_${obj.title}`}
                  />
               ))
            }
         </div>
      </div>
   )
}

export default Home