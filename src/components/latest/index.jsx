import React from 'react'

import img1 from '../../assets/images/latest-1.png'
import img2 from '../../assets/images/latest-2.png'
import img3 from '../../assets/images/latest-3.png'
import './latest.scss'


const Latest = () => {
  return (
    <div className='latest container'>
        <div className="latest__title">
            <h1>LATEST NEWS</h1>
        </div>
        <div className="latest__cards">
            <div className="latest__card">
                <div className="latest__card-img">
                    <img src={img1} alt="" />
                </div>
                <div className="latest__card-desc">
                    <p><span>01 Jan, 2015</span></p>
                    <h3>Fashion Industry</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="latest__card">
                <div className="latest__card-img">
                    <img src={img2} alt="" />
                </div>
                <div className="latest__card-desc">
                    <p><span>01 Jan, 2015</span></p>
                    <h3>Best Design Tools</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="latest__card">
                <div className="latest__card-img">
                    <img src={img3} alt="" />
                </div>
                <div className="latest__card-desc">
                    <p><span>01 Jan, 2015</span></p>
                    <h3>HR Community</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latest