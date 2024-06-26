import React, { useState } from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import { GoPerson } from 'react-icons/go'
import { IoHeartOutline } from 'react-icons/io5'
import { CgShoppingCart } from 'react-icons/cg'
import { IoIosSearch } from 'react-icons/io'

import logo from '../../../assets/icons/logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
const Header = () => {

    const [showburger, setShowBurger] = useState(false)

    return (
        <>
            <div className='sub-header container'>
                <div className="sub-header__items row">
                    <NavLink className="sub-header__items-link" to={"/admin"}>
                        <GoPerson className='sub-header__items-icon' />
                    </NavLink>
                    <NavLink className="sub-header__items-link" to={"/wishlist"}>
                        <IoHeartOutline className='sub-header__items-icon' />
                        <sub>0</sub>
                    </NavLink>
                    <NavLink className="sub-header__items-link" to={"/cart"}>
                        <CgShoppingCart className='sub-header__items-icon' />
                        <sub>0</sub>
                    </NavLink>
                    <p>Items</p>
                    <p>$0.00 <IoIosSearch className='sub-header__items-icon' /></p>
                </div>
            </div>
            <header className='container'>
                <nav className='nav row'>
                    <NavLink to={"/"}>
                        <div className="nav__logo">
                            <img src={logo} alt="" />
                            <span>E - Comm</span>
                        </div>
                    </NavLink>
                    <div className="nav__links">
                        <NavLink to={"/"}>HOME</NavLink>
                        <NavLink to={"#"}>BAGS</NavLink>
                        <NavLink to={"#"}>SNEAKERS</NavLink>
                        <NavLink to={"#"}>BELT</NavLink>
                        <NavLink to={"/contact"}>CONTACT</NavLink>
                    </div>
                    <button onClick={() => setShowBurger(prev => !prev)} className='nav__burger-btn'> <RxHamburgerMenu /></button>
                    {
                        showburger
                            ?
                            <div className="nav__burger-sidebar">
                                <NavLink onClick={()=> setShowBurger(false)} to={"/"}>HOME</NavLink>
                                <NavLink onClick={()=> setShowBurger(false)} to={"#"}>BAGS</NavLink>
                                <NavLink onClick={()=> setShowBurger(false)} to={"#"}>SNEAKERS</NavLink>
                                <NavLink onClick={()=> setShowBurger(false)} to={"#"}>BELT</NavLink>
                                <NavLink onClick={()=> setShowBurger(false)} to={"/contact"}>CONTACT</NavLink>
                            </div>
                            :
                            <></>
                    }
                </nav>
            </header>
        </>
    )
}

export default Header