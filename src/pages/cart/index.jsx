import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../components/counter';

import './cart.scss'
import { deleteToCart } from '../../context/cartSlice';
import { useGetValue } from '../../hooks/useGetValue'

const BOT_TOKEN = "7398728173:AAFBRewLYedKk8QzPkuPgic1W3Tt6mv4rzc"
const CHAT_ID = "-4216348753"

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  mobile: "",
}

const Cart = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.cart.value)
  const [showModal, setShowModal] = useState(false)
  const { formData, handleChange } = useGetValue(initialState)

  const handleSendMessage = (e) => {
    e.preventDefault()
    let text = 'Xabarlar %0A%0A'
    text += `Ismi:  ${formData.firstname}  ${formData.lastname}%0A`
    text += `Email:  ${formData.email} %0A`
    text += `Phone number:   ${formData.mobile} %0A`
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
  }

  let carts = data?.map(el => (
    <div key={el.id} className="cart__card">
      <div className="cart__card-left">
        <button onClick={() => dispatch(deleteToCart(el.id))}><IoClose /></button>
        <div className="cart__card-left__img">
          <img src={el.image} alt="" />
        </div>
        <h1 className='line-clamp' title={el.title}>{el.title}</h1>
      </div>
      <div className="cart__card-right">
        <p>${el.price}</p>
        <Counter />
      </div>
    </div>
  ))

  return (
    <main className='cart container'>
      <div className="cart__wrapper">
        {carts}
      </div>
      <div className="cart__bottom">

        <div className="cart__checkout">
          <p>Subtotal <span>$998</span></p>
          <p>Shipping fee <span>$20</span></p>
          <p>Coupon <span>no</span></p>
          <h3>TOTAL <span>$118</span></h3>
          <button onClick={() => setShowModal(true)}>Check Out</button>
        </div>
      </div>
      {
        showModal
          ?
          <>
            <div onClick={()=> setShowModal(false)} className="cart__overlay"></div>
            <form onSubmit={handleSendMessage} action="" className='cart__modal'>
              <div className="cart__modal-close">
                <button onClick={()=> setShowModal(false)}><IoClose /></button>
              </div>
              <input value={formData.firstname} onChange={handleChange} name='firstname' type="text" placeholder='First Nmae' required/>
              <input value={formData.lastname} onChange={handleChange} name='lastname' type="text" placeholder='Last Name' required/>
              <input value={formData.email} onChange={handleChange} name='email' type="text" placeholder='Email' required/>
              <input value={formData.mobile} onChange={handleChange} name='mobile' type="text" placeholder='Mobile Phone' required/>
              <div className="cart__modal-btn">
                <button >Go To Payment</button>
              </div>
            </form>
          </>
          :
          <></>
      }
    </main>
  )
}

export default Cart