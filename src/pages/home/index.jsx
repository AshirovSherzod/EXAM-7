import React from 'react'
import Hero from '../../components/hero'
import Products from '../../components/products'

const Home = () => {
  return (
    <main>
      <Hero />
      <Products limit={8}/>
    </main>
  )
}

export default Home