import React, { useState } from 'react'

function SortPopup() {
   let sortLabel = ["популярності", "ціні", "алфавіту"]
   const [activeLabel, setActiveLabel] = useState(sortLabel[0])
   const [visiblePopup, setVisiblePopup] = useState(false)

   let toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
   }

   return (
      <div className="sort-popup">
         {
            visiblePopup
               ? <b className="sort-popup__sort-by sort-popup__triangle-inactive">Сортувати по: </b>
               : <b className="sort-popup__sort-by sort-popup__triangle-active">Сортувати по: </b>
         }
         <button className="sort-popup__label" onClick={toggleVisiblePopup}>{activeLabel}</button>
         <ul className={`sort-popup__popup ${visiblePopup && 'sort-popup__popup-active'}`}>
            {
               sortLabel.map((name) => (
                  activeLabel === name
                     ? <li className="sort-popup__popup-item sort-popup__item-active">{name}</li>
                     : <li className="sort-popup__popup-item">{name}</li>
               ))
            }
         </ul>
      </div>
   )
}

export default SortPopup