import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products';

import img from '../../assets/images/empty-img.jpg'
import './wishlist.scss'

const Wishlist = () => {

  const data = useSelector(state => state.wishlist.value)

  useEffect(()=> {
    window.scroll(0,0)
  }, [])

  return (
    <main>
      {
        data.length
          ?
          <Products data={data} />
          :
          <div className="empty container">
            <img src={img} alt="" />
            <h1>Empty Wishlist</h1>
          </div>
      }
    </main>

  )
}

export default Wishlist