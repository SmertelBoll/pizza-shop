import React from 'react'

function Category() {
   let category = ["Всі", "М'ясні", "Вегетеріанські", "Гриль", "Гострі"]
   return (
      <div className="category">
         {
            category.map((name, index) => (
               index === 0
                  ? <button className="category__item category__active" key={`${name}_${index}`}>{name}</button>
                  : <button className="category__item" key={`${name}_${index}`}>{name}</button>
            )
            )
         }
      </div >
   )
}

export default Category