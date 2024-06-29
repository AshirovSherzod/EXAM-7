import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllProductsQuery, useGetSingleProductQuery } from '../../context/productsSlice'
import { IoIosStar } from 'react-icons/io'
import { CgFacebook, CgShoppingCart } from 'react-icons/cg'
import { CiHeart } from 'react-icons/ci'
import { BsTwitter } from 'react-icons/bs'

import './singlepage.scss'
import Products from '../../components/products'
import Counter from '../../components/counter'
import { useDispatch, useSelector } from 'react-redux'
import { wishlist } from '../../context/wishlistSlice'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { addToCart } from '../../context/cartSlice'

const SinglePage = () => {
  let id = useParams()

  const { data } = useGetSingleProductQuery(id.id)
  const [offset, setOffset] = useState(1)
  const { data: productsData, isLoading } = useGetAllProductsQuery({ limit: offset * 4 })
  const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist.value)


  useEffect(()=> {
    window.scroll(0,0)
  }, [])

  return (
    <main>
      <div className='singlepage container'>
        <div className="singlepage__img">
          <img src={data?.image} alt="" />
        </div>
        <div className="singlepage__content">
          <div className="singlepage__content-top">
            <h1>{data?.title}</h1>
            <div className="singlepage__content-top__rating">
              <div className="singlepage__content-top__rating-rate singlepage__content-top__rating-rate">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <p>0 review</p>
              <p>count: {data?.rating.count}</p>
            </div>
          </div>
          <div className="singlepage__content-middle">
            <div className="singlepage__content-middle__price">
              <p>${data?.price} <span>24% Off</span></p>
            </div>
            <div className="singlepage__content-middle__desc">
              <p>{data?.description}</p>
            </div>
          </div>
          <div className="singlepage__content-bottom">
            <Counter />
            <div className="singlepage__content-bottom__btns">
              <button onClick={()=> dispatch(addToCart(data))} className="singlepage__content-bottom__addtocart">
                <CgShoppingCart /> Add To Cart
              </button>
              <button onClick={() => dispatch(wishlist(data))} className='singlepage__content-bottom__heart'>
                {wishlist.some((el) => el.id === data?.id) ? (
                  <FaHeart color="crimson" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
          <div className="singlepage__content-bottom__social">
            <button><CgFacebook /> Share On Facebook</button>
            <button><BsTwitter /> Share On Twitter</button>
          </div>
        </div>
      </div>
      <div className="description container">
        <h3>Product Information</h3>
        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
      </div>
      <Products data={productsData} offset={offset} setOffset={setOffset} />
    </main>
  )
}

export default SinglePage