import React, { useState } from 'react'

function PizzaBlock({ type = [0, 1] }) {
   let types = ["тонка", "традиційна"]
   const [activeType, setActiveType] = useState(0)

   return (
      <div className="pizza-block">
         <img src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg" alt="" className="pizza-block__img" width={260} height={260} />
         <h3 className="pizza-block__title">Чізбургер-піца</h3>
         <div className="pizza-block__choice-types">
            {
               type.map(name => (
                  <button
                     className={`pizza-block__type ${name === activeType ? 'pizza-block__type-active' : ''}`}
                     key={`${name}`}
                     onClick={() => { setActiveType(name) }}
                  >
                     {types[name]}
                  </button>
               ))
            }
         </div>
         <div className="pizza-block__price-and-button">
            <div className="pizza-block__price">від 100 ₴</div>
            <button className="pizza-block__button">
               <span className="pizza-block__button-text">Добавити</span>
               <div className="pizza-block__button-counter"><span>0</span></div>
            </button>
         </div>
      </div>
   )
}

export default PizzaBlock