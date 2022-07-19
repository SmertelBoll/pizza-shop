import React from 'react'
import Category from '../components/Category'
import PizzaBlock from '../components/PizzaBlock'
import SortPopup from '../components/SortPopup'

function Home() {
   return (
      <div className="home">
         <div className="home__sort">
            <Category />
            <SortPopup />
         </div>
         <h2 className="home__label">Всі піци</h2>
         <div className="home__pizzas">
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
         </div>
      </div>
   )
}

export default Home