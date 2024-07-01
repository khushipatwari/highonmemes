import React from 'react'
import './gettingstarted.css'
import AOS from 'aos'
import 'aos/dist/aos.css' 

const Gettingstarted = () => {
  return (
    <div className='main-getting-started-container'>
        <div className='getting-started-heading'>
            <h2>Getting Started Is Easy</h2>
        </div>
        <div className='getting-started-container'>
            <div className='first-container image-box' data-aos="fade-right" >
                <img src="./images/firstcontainerimage.png" alt="" />
                <h4>Build a campaign brief</h4>
            </div>
            <div className='arrow' data-aos="fade-right" data-aos-delay="300">
                <img src="./images/gettingstartedarrow.png" alt="" />
            </div>
            <div className='second-container image-box' data-aos="fade-right" data-aos-delay="600">
                <img src="./images/secondcontainerimage.png" alt="" />
                <h4>Creators apply</h4>
            </div>
            <div className='arrow' data-aos="fade-right" data-aos-delay="900">
                <img src="./images/gettingstartedarrow.png" alt="" />
            </div>
            <div className='third-container image-box' data-aos="fade-right" data-aos-delay="1200"> 
                <img src="./images/thirdcontainerimage.png" alt="" />
                <h4>Activate the one you want</h4>
            </div>
        </div>
    </div>
  )
}

export default Gettingstarted