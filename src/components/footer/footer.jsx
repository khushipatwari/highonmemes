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
            <a href=""><img src="./images/Facebook.png" alt="" /></a>
            <a href=""><img src="./images/instagram.png" alt="" /></a>
            <a href="https://www.linkedin.com/company/highonmemes/"><img src="./images/Linkedin.png" alt="" /></a>
            <a href=""><img src="./images/twitter.png" alt="" /></a>
        </div>
    </div>
  )
}

export default Footer