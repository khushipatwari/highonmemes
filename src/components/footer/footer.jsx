import React from 'react'
import './footer.css'

const Footer = () => {

const date= new Date()

let year = date.getFullYear()

  return (
    <div className='container-footer'>
        <div className='footer-logo'>
        <h1 className='footer-heading'>HIGH, on <br></br>MEMES.com<br></br>
        <span>WE'LL MAKE YOU LAUGH THEN MAKE YOU BUY</span>
        <p>© {year} Highonmemes.com. All rights reserved.</p></h1>
        </div>
        <div className='social-links'>
            <img src="./images/Facebook.png" alt="" />
            <img src="./images/instagram.png" alt="" />
            <img src="./images/Linkedin.png" alt="" />
            <img src="./images/twitter.png" alt="" />
        </div>
    </div>
  )
}

export default Footer