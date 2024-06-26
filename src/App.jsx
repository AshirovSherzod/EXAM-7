import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Contact from './pages/contact'
import SinglePage from './pages/singlepage'
import Wishlist from './pages/wishlist'
import Auth from './pages/auth'
import Admin from './pages/admin'
import Login from './pages/login'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singlepage/:id' element={<SinglePage />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/' element={<Auth />}>
          <Route path='admin' element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
