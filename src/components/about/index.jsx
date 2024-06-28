import React from 'react'

import './about.scss'
import img1 from '../../assets/images/about-1.png'
import img2 from '../../assets/images/about-2.svg'
import img3 from '../../assets/images/about-3.svg'

const About = () => {
    return (
        <div className="about container">
            <div className="about__card">
                <div className="about__card-img">
                    <img src={img1} alt="" />
                </div>
                <h3>FREE SHIPPING</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="about__card">
                <div className="about__card-img">
                    <img src={img2} alt="" />
                </div>
                <h3>100% REFUND</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="about__card">
                <div className="about__card-img">
                    <img src={img3} alt="" />
                </div>
                <h3>SUPPORT 24/7</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    )
}

export default About