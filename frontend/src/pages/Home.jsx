import React from 'react'
import Category from '../components/Category'
import PizzaBlock from '../components/PizzaBlock'
import SortPopup from '../components/SortPopup'

function Home() {
   return (
      <div class="home">
         <div class="home__sort">
            <Category />
            <SortPopup />
         </div>
         <h2 class="home__label">Всі піци</h2>
         <div class="home__pizzas">

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