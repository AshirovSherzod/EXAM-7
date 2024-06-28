import React from 'react'
import { IoIosStar } from 'react-icons/io'

import img from '../../assets/images/featured-img.png'
import './featured.scss'

const Featured = () => {
    return (
        <div className='featured container'>
            <div className="featured__title">
                <h1>LATEST NEWS</h1>
            </div>
            <div className="featured__cards">
                <div className="featured__card">
                    <div className="featured__card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="featured__card-desc">
                        <h3>Blue Swade Nike Sneakers </h3>
                        <div className="featured__card-rating">
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                        </div>
                        <p>$499 <span>$599</span></p>
                    </div>
                </div>
                <div className="featured__card">
                    <div className="featured__card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="featured__card-desc">
                        <h3>Best Design Tools</h3>
                        <div className="featured__card-rating">
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                        </div>
                        <p>$499 <span>$599</span></p>
                    </div>
                </div>
                <div className="featured__card">
                    <div className="featured__card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="featured__card-desc">
                        <h3>HR Community</h3>
                        <div className="featured__card-rating">
                            <IoIosStar   />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                        </div>
                        <p>$499 <span>$599</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured