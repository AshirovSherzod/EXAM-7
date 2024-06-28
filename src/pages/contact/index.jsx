import React, { useState } from 'react'

import './contact.scss'
import Search from '../../components/search'

const BOT_TOKEN = "7398728173:AAFBRewLYedKk8QzPkuPgic1W3Tt6mv4rzc"
const CHAT_ID = "-4216348753"

// https://api.telegram.org/bot7398728173:AAFBRewLYedKk8QzPkuPgic1W3Tt6mv4rzc/getUpdates



const Contact = () => {
   
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()
    let text = 'Xabarlar %0A%0A'
    text += `Ismi: ${name} %0A`
    text += `Email: ${email} %0A`
    text += `Message: ${message} %0A`
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
            <input value={name} onChange={(e)=> setName( e.target.value)} type="text" id='name' />
          </div>
          <div className="contact__content-form__input">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail( e.target.value)}  type="text" id='email' />
          </div>
          <div className="contact__content-form__input">
            <textarea value={message} onChange={(e)=> setMessage( e.target.value)}  name="" id=""></textarea>
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