import React, { memo, useEffect, useState } from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import { GoPerson } from 'react-icons/go'
import { IoClose, IoHeartOutline } from 'react-icons/io5'
import { CgShoppingCart } from 'react-icons/cg'
import { IoIosSearch } from 'react-icons/io'

import logo from '../../../assets/icons/logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdKeyboardArrowRight } from 'react-icons/md'
const Header = () => {

    const [showburger, setShowBurger] = useState(false)
    const [stickyHeader, setStickyHeader] = useState(false);


    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (window.scrollY > 70) {
    //       setStickyHeader(true);
    //     } else {
    //       setStickyHeader(false);
    //     }
    //   };
  
    //   window.addEventListener("scroll", handleScroll);
  
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);
  

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
            <header className={`${stickyHeader ? "sticky-header" : ""}`}>
                <nav className='nav row container '>
                    <NavLink to={"/"}>
                        <div className="nav__logo">
                            <img src={logo} alt="" />
                            <span>E - Comm</span>
                        </div>
                    </NavLink>
                    <div className={`nav__links ${showburger ? "show__list" : ""}`}>
                        <div className="nav__links-btn">
                            <button onClick={() => setShowBurger(false)}> <IoClose /> </button>
                        </div>
                        <NavLink onClick={() => setShowBurger(false)} to={"/"}>HOME  <MdKeyboardArrowRight className='arrow'/></NavLink>
                        <NavLink onClick={() => setShowBurger(false)} to={"#"}>BAGS  <MdKeyboardArrowRight className='arrow'/></NavLink>
                        <NavLink onClick={() => setShowBurger(false)} to={"#"}>SNEAKERS  <MdKeyboardArrowRight className='arrow'/></NavLink>
                        <NavLink onClick={() => setShowBurger(false)} to={"/login"}>LOGIN  <MdKeyboardArrowRight className='arrow'/></NavLink>
                        <NavLink onClick={() => setShowBurger(false)} to={"/contact"}>CONTACT    <MdKeyboardArrowRight className='arrow'/></NavLink>
                    </div>
                    <button onClick={() => setShowBurger(true)} className='nav__burger-btn'> <RxHamburgerMenu /></button>

                </nav>
            </header>
            {showburger ? <div onClick={() => setShowBurger(false)} className="overlay"></div> : <></>}
        </>
    )
}

export default memo(Header)