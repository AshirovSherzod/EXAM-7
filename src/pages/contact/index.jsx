import React, { useState } from 'react'

import './contact.scss'
import Search from '../../components/search'
import { useGetValue } from '../../hooks/useGetValue'

const BOT_TOKEN = "7398728173:AAFBRewLYedKk8QzPkuPgic1W3Tt6mv4rzc"
const CHAT_ID = "-4216348753"

// https://api.telegram.org/bot7398728173:AAFBRewLYedKk8QzPkuPgic1W3Tt6mv4rzc/getUpdates

const initialState = {
  name: "",
  email: "",
  message: "",
}


const Contact = () => {


  const { formData, handleChange } = useGetValue(initialState)

  const handleSendMessage = (e) => {
    e.preventDefault()
    let text = 'Xabarlar %0A%0A'
    text += `Ismi:  ${formData.name} %0A`
    text += `Email:  ${formData.email} %0A`
    text += `Message:   ${formData.message} %0A`
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
  }

  return (
    <main className='contact container'>
      <div className="contact__content">
        <div className="contact__content-info">
          <h1>Get in touch</h1>
          <p>contact@e-comm.ng</p>
          <p>+234 4556 6665 34</p>
          <p>20 Prince Hakerem Lekki
            Phase 1, Lagos.</p>
          <div className="contact__content-info__color"></div>
        </div>
        <form onSubmit={handleSendMessage} action="" className='contact__content-form'>
          <div className="contact__content-form__input">
            <label htmlFor="name">Full Name</label>
            <input value={formData.name} onChange={handleChange} type="text" id='name' name='name' required/>
          </div>
          <div className="contact__content-form__input">
            <label htmlFor="email">Email</label>
            <input value={formData.email} onChange={handleChange} type="text" id='email' name='email' required/>
          </div>
          <div className="contact__content-form__input">
            <textarea value={formData.message} onChange={handleChange} name="message" id="" required></textarea>
          </div>
          <div className="contact__content-form__input">
            <button> Submit</button>
          </div>

        </form>
      </div>
      <Search />
    </main>
  )
}

export default Contact