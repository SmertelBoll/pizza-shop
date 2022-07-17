import React from 'react'
import Button from './Button'

function Header() {
   return (
      <header className="header">
         <div className="header__logo-and-name">
            <img src="img/logo.png" alt="" className="header__logo" width={38} height={38} />

            <div>
               <h1 className="header__name">REACT PIZZA</h1>
               <p className="header__description">Найсмачніша піца у світі</p>
            </div>
         </div>
         <Button />
      </header>
   )
}

export default Header