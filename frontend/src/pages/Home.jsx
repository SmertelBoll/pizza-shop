import React from 'react'
import PizzaBlock from '../components/PizzaBlock'

function Home() {
   return (
      <div className="home">
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