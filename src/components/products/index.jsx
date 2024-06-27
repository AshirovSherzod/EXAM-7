import React, { memo, useEffect, useState } from 'react'

import './products.scss'
import ProductItem from '../../components/products/ProductItem'
import { useGetAllProductsQuery } from '../../context/productsSlice'
import { useLocation } from 'react-router-dom'

const Products = ({ limit }) => {

    const { pathname } = useLocation()
    const [show, setShow] = useState(false)
    const [offset, setOffset] = useState(1)
    let perPageCount = limit
    const { data, isLoading } = useGetAllProductsQuery({ limit: offset * perPageCount })

    useEffect(() => {
        pathname.includes("/singlepage") ? setShow(true) : setShow(false)
    }, [])


    let cards = data?.map(el => (
        <ProductItem key={el.id} product={el} id={el.id} title={el.title} img={el.image} price={el.price} count={el.rating.count} />
    ))
    return (
        <div className='products container'>
            <div className={`products__title ${show ? "hidden" : ""}`}>
                <h1>BEST SELLER</h1>
                <ul>
                    <li>All</li>
                    <li>Bags</li>
                    <li>Sneakers</li>
                    <li>Belt</li>
                    <li>Sunglasses</li>
                </ul>
            </div>
            <div className="products__cards"> {cards} </div>
            <div className={`products__btn ${show ? "hidden" : ""}`}>
                <button className='products__btn' onClick={() => setOffset(prev => prev + 1)}>Load More</button>
            </div>
        </div>
    )
}

export default memo(Products)