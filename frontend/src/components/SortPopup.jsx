import React, { useState } from 'react'

function SortPopup() {
   let sortLabel = ["популярності", "ціні", "алфавіту"]
   const [activeLabel, setActiveLabel] = useState(sortLabel[0])
   const [visiblePopup, setVisiblePopup] = useState(false)

   let toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
   }

   return (
      <div class="sort-popup">
         {
            visiblePopup
               ? <b class="sort-popup__sort-by sort-popup__triangle-inactive">Сортувати по: </b>
               : <b class="sort-popup__sort-by sort-popup__triangle-active">Сортувати по: </b>
         }
         <button class="sort-popup__label" onClick={toggleVisiblePopup}>{activeLabel}</button>
         <ul class={`sort-popup__popup ${visiblePopup && 'sort-popup__popup-active'}`}>
            {
               sortLabel.map((name, index) => (
                  <li
                     class={`sort-popup__popup-item ${activeLabel === name ? 'sort-popup__item-active' : ''} `}
                     key={`${name}_${index}`}
                     onClick={() => {
                        setActiveLabel(sortLabel[index])
                     }}
                  >{name}</li>
               ))
            }
         </ul>
      </div>
   )
}

export default SortPopup