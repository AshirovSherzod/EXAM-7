import React from 'react'

import running from '../../assets/images/running-img.png'
import './running.scss'

const Running = () => {
    return (
        <div className="running ">
            <div className="running__wrapper container">
                <div className='running__title'>
                    <h1>Adidas Men Running <br />
                        Sneakers</h1>
                    <p>Performance and design. Taken right to the edge.</p>
                    <button>Shop Now</button>
                </div>
                <div className="running__img">
                    <img src={running} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Running