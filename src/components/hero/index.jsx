import React, { memo } from 'react'
import './hero.scss'

import img1 from '../../assets/images/uhero-1.png'
import img2 from '../../assets/images/uhero-2.png'
import img3 from '../../assets/images/uhero-3.png'


const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className='hero__title container'>
          <h1 className=''>Super Flash Sale <br />
            50% Off</h1>
        </div>
          <div className="under-hero container">
            <div className="under-hero__card">
              <h3>FS - QUILTED MAXI <br /> CROSS BAG</h3>
              <div className="under-hero__card-desc">
                <p>$534,33 <span>24% Off</span></p>
                <p>$299,43</p>
              </div>
            </div>
            <div className="under-hero__card">
              <h3>FS - Nike Air <br /> Max 270 React...</h3>
              <div className="under-hero__card-desc">
                <p>$534,33 <span>24% Off</span></p>
                <p>$299,43</p>
              </div>
            </div>
            <div className="under-hero__card">
              <h3>FS - QUILTED MAXI <br /> CROSS BAG</h3>
              <div className="under-hero__card-desc">
                <p>$534,33 <span>24% Off</span></p>
                <p>$299,43</p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default memo(Hero)