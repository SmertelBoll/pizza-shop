import React from 'react'
import CartBlock from '../components/CartBlock'

function Cart() {
   return (
      <div class="cart">
         {true
            ? <div>
               <div class="cart__header">
                  <div class="cart__img-and-tittle">
                     <img src="img/cart_cart-icon.svg" alt="" class="cart__img-cart" width={29} height={29} />
                     <h2 class="cart__tittle">Корзина</h2>
                  </div>
                  <button class="cart__delete-cart">
                     <img src="img/cart_trash-icon.svg" alt="" class="cart__delete-cart-icon" />
                     <span class="cart__delete-cart-text">Очистити корзину</span>
                  </button>
               </div>
               <div class="cart__cart-block">
                  <CartBlock />
                  <CartBlock />
                  <CartBlock />
               </div>
            </div>

            : <div class="cart-empty">
               <h2 class="cart-empty__header">Корзина пуста 😕</h2>
               <div class="cart-empty__information">
                  <p>Ймовірно, ви не заказували ще піцу</p>
                  <p>Для того, щоб заказати піцу, перейдуть на головну сторінку</p>
               </div>

               <img src="img/cart_empty-cart.svg" alt="" class="cart-empty__empty-img" width="300" height="255" />
               <br />
               <button class="cart-empty__button">
                  <span>Повернутись назад</span>
               </button>
            </div>
         }
      </div>
   )
}

export default Cart