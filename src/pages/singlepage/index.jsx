import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../../context/productsSlice'
import { IoIosStar } from 'react-icons/io'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { CgFacebook, CgShoppingCart } from 'react-icons/cg'
import { CiHeart } from 'react-icons/ci'
import { BsTwitter } from 'react-icons/bs'

import './singlepage.scss'
import Products from '../../components/products'

const SinglePage = () => {
  let id = useParams()

  const { data } = useGetSingleProductQuery(id.id)

  return (
    <main>
      <div className={`'singlepage container'`}>
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
            <div className="singlepage__content-bottom__counter">
              <button><FaMinus /></button>
              <button>0</button>
              <button><FaPlus /></button>
            </div>
            <div className="singlepage__content-bottom__btns">
              <button className="singlepage__content-bottom__addtocart">
                <CgShoppingCart /> Add To Cart
              </button>
              <button className='singlepage__content-bottom__heart'><CiHeart /></button>
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
      <Products limit={4}/>
    </main>
  )
}

export default SinglePage