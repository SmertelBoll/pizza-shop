import React, { useState } from 'react'

function Category() {
   let category = ["Всі", "М'ясні", "Вегетеріанські", "Гриль", "Гострі"]

   const [activeLabel, setActiveLabel] = useState(category[2])
   const [visiblePopup, setVisiblePopup] = useState(false)

   let toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
   }
   return (
      <div className="category">
         <div className="category__without-poput">
            {
               category.map((name, index) => (
                  <button
                     className={`category__item ${category[index] === activeLabel ? 'category__active' : ''}`}
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

         <div className="category__small-screen">
            <button className="category__item category__active" onClick={toggleVisiblePopup}>{activeLabel}</button>

            <div className={`category__popup ${visiblePopup ? 'category__popup-active' : ''}`}>
               {
                  category.map((name, index) => (
                     <button
                        className={`category__item ${category[index] === activeLabel ? 'category__active' : ''}`}
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