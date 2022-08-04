import React, { useState } from 'react'

function PizzaBlock({ id, imageUrl, price, title, types }) {
   let type = ["тонка", "традиційна"]
   const [activeType, setActiveType] = useState(types[0])

   return (
      <div className="wrapper-piza-block">
         <div className="pizza-block">
            <img src={imageUrl} alt="" className="pizza-block__img" width={260} height={260} />
            <h3 className="pizza-block__title">{title}</h3>
            <div className="pizza-block__choice-types">
               {
                  types.map(name => (
                     <button
                        className={`pizza-block__type ${name === activeType ? 'pizza-block__type-active' : ''}`}
                        key={`${name}`}
                        onClick={() => { setActiveType(name) }}
                     >
                        {type[name]}
                     </button>
                  ))
               }
            </div>
            <div className="pizza-block__price-and-button">
               <div className="pizza-block__price">від {price} ₴</div>
               <button className="pizza-block__button">
                  <span className="pizza-block__button-text">Добавити</span>
                  <div className="pizza-block__button-counter"><span>0</span></div>
               </button>
            </div>
         </div>
      </div>
   )
}

export default PizzaBlock