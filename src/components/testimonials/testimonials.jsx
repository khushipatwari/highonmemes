import React from 'react'
import Navbar from '../navbar/navbar'
import './testimonials.css'

const Testimonials = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='testimonials-container'>
        <div className='testimonials-heading'>
            <h2>LET OUR <span style={{color:'#7E69B9'}}>STORIES</span> DO THE TALKING</h2>
        </div>
        <div className="cards-container">
            <div className="card-container">
                <div className="main-section">
                    <p>"I love that new customers are coming to our brand organically because of Creator.co's 
                        campaigns. We partnered with creators who were familiar with our products and genuinely
                         wanted to share our products with their friends,family, and community."
                    </p>
                </div>
                <div className="names-section">
                    <div className="brand-circle"></div>
                    <div className="names">Brittany Alfinito</div>
                </div>
            </div>
            <div className="card-container">
                <div className="main-section">
                    <p>"I love that new customers are coming to our brand organically because of Creator.co's 
                        campaigns. We partnered with creators who were familiar with our products and genuinely
                         wanted to share our products with their friends,family, and community."
                    </p>
                </div>
                <div className="names-section">
                    <div className="brand-circle"></div>
                    <div className="names">Brittany Alfinito</div>
                </div>
            </div>
            <div className="card-container">
                <div className="main-section">
                    <p>"I love that new customers are coming to our brand organically because of Creator.co's 
                        campaigns. We partnered with creators who were familiar with our products and genuinely
                         wanted to share our products with their friends,family, and community."
                    </p>
                </div>
                <div className="names-section">
                    <div className="brand-circle"></div>
                    <div className="names">Brittany Alfinito</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonials