import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector'

import '../App.scss';
import './cart.scss'

const Cart = () => {
  const { items, totalPrice } = useSelector(state => state.cart);

  return (
    <div className='container container__cart'>
      <div className="cart__top">
        <h2 className="content__title">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>Cart</h2>
        <div className="cart__clear">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>
          <span>Clear cart</span>
        </div>
      </div>
      <div className="cart__items">
        <div className="cart__item">
          <div className="cart__item-img">
            <img
              width={140}
              className="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div className="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div className="cart__item-count">
            <button class='color'>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 8H4V7H11V8Z" fill="orange" /> </svg>
            </button>
            <b>2</b>
            <button class='color'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /> </svg>
            </button>

          </div>
          <div className="cart__item-price">
            <b>770 ₽</b>
          </div>
          <div className="button--remove">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /> </svg>            </button>
          </div>
        </div>
      </div>
      <div className="cart__bottom">
        <div className="cart_bottom__details">
          <span>Total pizzas: <b>{items.length}</b></span>
          <span>To paying: {totalPrice}$</span>
        </div>
      </div>
      <div className="cart__bottom__buttons">
        <Link to='/'>
          <div className="button button--outline button--add go-back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-left" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" /> </svg>
            <span>Go back</span>
          </div>
        </Link>

        <div className="button pay-btn">
          <span>Pay</span>
        </div>
      </div>
    </div>
  )
}

export default Cart
