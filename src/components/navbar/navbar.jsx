import React, {useState,useRef} from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import {  FaBars,FaTimes} from 'react-icons/fa';


const Navbar = () => {

  const navRef =useRef()

  const showNavbar = () =>
    {
      navRef.current.classList.toggle("responsive")
    }
  return (

<div className='nav-bar'>
<Link to='/' className="logo-nav"><img src="./images/logo.png" alt="logo" /></Link>

<nav className='navsection' ref={navRef}>
  <ul className='nav-holder'>
      <li className='navitem'><Link to='/brandpage' className='link'>Brands</Link></li>
      <li className='navitem'><Link to='/' className='link'>Creators</Link></li>
      <li className='navitem'><Link to='/aboutus' className='link'>About Us</Link></li>
      <li className='navitem'>  <Link to='/testimonials' className='link'>Testimonials</Link> </li>
  </ul>
</nav>
<FaBars className='nav-btn' onClick={showNavbar}></FaBars>
</div>
  )
}

export default Navbar