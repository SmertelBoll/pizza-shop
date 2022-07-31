import React from 'react'
import CartBlock from '../components/CartBlock'

function Cart() {
   return (
      <div className="cart">
         {true
            ? <div>
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
               <div className="cart__number-and-price">
                  <div className="cart__number">Всього піц: <span>3 шт.</span></div>
                  <div className="cart__price">Сума заказа: <span>999 ₴</span></div>
               </div>
               <nav className="cart__navigation">
                  <button className="cart__back-home cart__button">
                     <svg className='cart__back-home-img' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#898989" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                     <span>Повернутись назад</span>
                  </button>
                  <button className="cart__buy cart__button">Оплатити зараз</button>
               </nav>
            </div>

            : <div className="cart-empty">
               <h2 className="cart-empty__header">Корзина пуста 😕</h2>
               <div className="cart-empty__information">
                  <p>Ймовірно, ви не заказували ще піцу</p>
                  <p>Для того, щоб заказати піцу, перейдіть на головну сторінку</p>
               </div>

               <img src="img/cart_empty-cart.svg" alt="" className="cart-empty__empty-img" width="300" height="255" />
               <br />
               <button className="cart-empty__button">
                  <span>Повернутись назад</span>
               </button>
            </div>
         }
      </div>
   )
}

export default Cart