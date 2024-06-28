import React from 'react'

import './login.scss'

const Login = () => {
  return (
    <main className='login container'>
      <form action="" className='login__form'>
        <div className="login__form-input">
          <label htmlFor="">User Name</label>
          <input type="text" name="" id="" />
        </div>
        <div className="login__form-input">
          <label htmlFor="">Password</label>
          <input type="text" name="" id="" />
        </div>
        <button>Login</button>
      </form>
    </main>
  )
}

export default Login