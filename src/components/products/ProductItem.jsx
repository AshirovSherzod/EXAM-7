import React, { memo } from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { CiHeart } from 'react-icons/ci'
import { IoIosStar } from 'react-icons/io'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, title, img, price, count, }) => {
  return (
    <div className="products__cards__card">
      <div className="products__cards__card-img">
        <Link to={`/singlepage/${id}`}>
          <img src={img} alt={title} />
        </Link>
        <div className="products__cards__card-hover">
          <button><CiHeart /></button>
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