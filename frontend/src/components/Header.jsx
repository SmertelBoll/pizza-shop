import React from 'react'
import Button from './Button'

function Header() {
   return (
      <header class="header">
         <div class="header__logo-and-name">
            <img src="img/logo.png" alt="" class="header__logo" width={38} height={38} />

            <div>
               <h1 class="header__name">PIZZA SHOP</h1>
               <p class="header__description">Найсмачніша піца у світі</p>
            </div>
         </div>
         <Button />
      </header>
   )
}

export default Header