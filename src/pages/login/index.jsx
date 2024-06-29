import React, { useEffect } from 'react'

import './login.scss'
import { useGetValue } from '../../hooks/useGetValue'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSignInMutation } from '../../context/api/userApi'
import { setToken } from '../../context/authSlice'

const initialState = {
    username: "mor_2314",
    password: "83r5^_"
}

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {formData, handleChange} = useGetValue(initialState)
  const [signIN, {data, isSuccess}] = useSignInMutation()

  useEffect(()=> {
    if(isSuccess) {
        dispatch(setToken(data?.token))
//         dispatch(setUser(data?.data?.user))
        navigate("/admin")
    }
}, [isSuccess])

  const handleLogin = (e) => {
    e.preventDefault()
    let user = {
      username: formData.username,
      password: formData.password
    }
    signIN(user)
  }
  console.log(data);

  return (
    <main className='login container'>
      <form onSubmit={handleLogin} action="" className='login__form'>
        <div className="login__form-input">
          <label htmlFor="">User Name</label>
          <input value={formData.username} onChange={handleChange} type="text" name="username"/>
        </div>
        <div className="login__form-input">
          <label htmlFor="">Password</label>
          <input value={formData.password} onChange={handleChange} type="password" name="password" />
        </div>
        <button>Login</button>
      </form>
    </main>
  )
}

export default Login