import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products';

const Wishlist = () => {

  const data = useSelector(state => state.wishlist.value)

  console.log(data);

  return (
    <main>
      <Products data={data} />
    </main>

  )
}

export default Wishlist