import React from 'react'

function PizzaBlock() {
   return (
      <div class="pizza-block">
         <img src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg" alt="" class="pizza-block__img" width={260} height={260} />
         <h3 class="pizza-block__title">Чізбургер-піца</h3>
         <div class="pizza-block__choice-types">
            <button class="pizza-block__type">тонка</button>
            <button class="pizza-block__type">традиційна</button>
         </div>
         <div class="pizza-block__price-and-button">
            <div class="pizza-block__price">від 100 ₴</div>
            <button class="pizza-block__button">
               <span class="pizza-block__button-text">Добавити</span>
               <div class="pizza-block__button-counter"><span>0</span></div>
            </button>
         </div>
      </div>
   )
}

export default PizzaBlock