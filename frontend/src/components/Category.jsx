import React, { useState } from 'react'

function Category() {
   let category = ["Всі", "М'ясні", "Вегетеріанські", "Гриль", "Гострі"]

   const [activeLabel, setActiveLabel] = useState(category[0])
   const [visiblePopup, setVisiblePopup] = useState(false)

   let toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
   }
   return (
      <div class="category">
         <div class="category__without-poput">
            {
               category.map((name, index) => (
                  <button
                     class={`category__item ${category[index] === activeLabel ? 'category__active' : ''}`}
                     key={`${name}_${index}`}
                     id={`main${index}`}
                     onClick={() => {
                        setActiveLabel(category[index])
                     }}
                  >{name}</button>
               )
               )
            }
         </div>

         <div class="category__small-screen">
            <button class="category__item category__active" onClick={toggleVisiblePopup}>{activeLabel}</button>

            <div class={`category__popup ${visiblePopup ? 'category__popup-active' : ''}`}>
               {
                  category.map((name, index) => (
                     <button
                        class={`category__item ${category[index] === activeLabel ? 'category__active' : ''}`}
                        key={`${name}_${index}`}
                        onClick={() => {
                           setActiveLabel(category[index])
                        }}
                     >{name}</button>
                  ))
               }
            </div>
         </div>

      </div >
   )
}

export default Category