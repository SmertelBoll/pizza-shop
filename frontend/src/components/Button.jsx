import React from 'react'

function Button() {
   return (
      <button className="header-button">
         <div className="header-button__price">520 ₴</div>
         <div className="header-button__number-and-icon">
            <img src="img/header_cart-icon.svg" alt="" className="header-button__icon" width={16} height={16} />
            <p className="header-button__number">3</p>
         </div>
      </button>
   )
}

export default Button