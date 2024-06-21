import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <div>
      <nav className="container-nav">
        <Link to='/' className="logo">
          <img src="./images/logo.png" alt="logo" /></Link>
        <div className='menu'>
        <ul>
          <li>Why us</li>
          {/* <Link to="/collaborationhub"><li>Collaboration Hub</li></Link> */}
          <li > Blog</li>
        </ul>
        <Link to='/authenticationlogin'><button className='login'>Login</button></Link>
        <Link to='/authenticationsignup'><button className='login'>Sign Up</button></Link>

        </div>
    </nav>
  </div>
  )
}

export default Navbar