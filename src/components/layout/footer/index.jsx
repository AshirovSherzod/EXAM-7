import React, { memo } from 'react'
import './footer.scss'

import img from '../../../assets/icons/logo.svg'
import img1 from '../../../assets/images/footer-1.svg'
import img2 from '../../../assets/images/footer-2.svg'
import img3 from '../../../assets/images/footer-3.svg'
import img4 from '../../../assets/images/footer-4.svg'


const Footer = () => {
  return (
    <footer className='footer '>
      <div className="container footer__wrapper">
        <div className="footer__top row">
          <div className="footer__top-title">
            <h2><img src={img} alt="" /> E - Comm</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
          </div>
          <div className="footer__top-follow">
            <h3>Follow Us</h3>
            <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          </div>
          <div className="footer__top-contact">
            <h3>Contact Us</h3>
            <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
        </div>
        <div className="footer__middle row">
          <ul>
            <h3>Infomation</h3>
            <li><a href="">About Us</a></li>
            <li><a href="">Infomation</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
          </ul>
          <ul>
            <h3>Service</h3>
            <li><a href="">About Us</a></li>
            <li><a href="">Infomation</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
          </ul>
          <ul>
            <h3>My Account</h3>
            <li><a href="">About Us</a></li>
            <li><a href="">Infomation</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
          </ul>
          <ul>
            <h3>Our Offers</h3>
            <li><a href="">About Us</a></li>
            <li><a href="">Infomation</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer__bottom">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)