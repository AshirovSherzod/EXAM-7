import React, { memo } from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { CiHeart } from 'react-icons/ci'
import { IoIosStar } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { wishlist } from '../../context/wishlistSlice'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const ProductItem = ({ id, title, img, price, count, product}) => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.wishlist.value)



  return (
    <div className="products__cards__card">
      <div className="products__cards__card-img">
        <Link to={`/singlepage/${id}`}>
          <img src={img} alt={title} />
        </Link>
        <div className="products__cards__card-hover">
          <button onClick={()=> dispatch(wishlist(product))}>
          {data.some((el) => el.id === product.id) ? (
                <FaHeart color="crimson" />
              ) : (
                <FaRegHeart />
              )}
          </button>
          <button><CgShoppingCart /></button>
        </div>
      </div>
      <Link to={`/singlepage/${id}`}>
        <div className="products__cards__card-content">
          <Link to={`/singlepage/${id}`}>
            <h3 className='line-clamp' title={title}>{title}</h3>
          </Link>
          <div className="products__cards__card-rating">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <div className="products__cards__card-price">
            <p>{count}</p>
            <p>${price} <span>24% Off</span></p>

          </div>
        </div>
      </Link >
    </div>

  )
}

export default memo(ProductItem)