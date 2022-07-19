import React from 'react'
import CartBlock from '../components/CartBlock'

function Cart() {
   return (
      <div className="cart">
         <div className="cart__header">
            <div className="cart__img-and-tittle">
               <img src="img/cart_cart-icon.svg" alt="" className="cart__img-cart" width={29} height={29} />
               <h2 className="cart__tittle">Корзина</h2>
            </div>
            <button className="cart__delete-cart">
               <img src="img/cart_trash-icon.svg" alt="" className="cart__delete-cart-icon" />
               <span className="cart__delete-cart-text">Очистити корзину</span>
            </button>
         </div>
         <div className="cart__cart-block">
            <CartBlock />
            <CartBlock />
            <CartBlock />
         </div>

      </div>
   )
}

export default Cart