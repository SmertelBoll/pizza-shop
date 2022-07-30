import React from 'react'

function Button() {
   return (
      <button class="header-button">
         <div class="header-button__price">520 ₴</div>
         <div class="header-button__number-and-icon">
            <img src="img/header_cart-icon.svg" alt="" class="header-button__icon" width={16} height={16} />
            <p class="header-button__number">3</p>
         </div>
      </button>
   )
}

export default Button