import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";


function Header() {
   let location = useLocation();
   let isButton = location.pathname !== '/cart' ? true : false;

   return (
      <header className="header">
         <Link to="/">
            <div className="header__logo-and-name">
               <img src="img/logo.png" alt="" className="header__logo" width={38} height={38} />

               <div>
                  <h1 className="header__name">PIZZA SHOP</h1>
                  <p className="header__description">Найсмачніша піца у світі</p>
               </div>
            </div>
         </Link>
         {isButton &&
            <Button />
         }
      </header>
   )
}

export default Header