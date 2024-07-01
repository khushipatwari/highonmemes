import React from 'react'
import './collabbrand.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Collabbrand = () => {

  return (
    <div>
      <div className='container-collab-brand' data-aos='fade-up'>
        <div className='content-brand'>
            <h1 className='collab-heading-brand'>Build a list of your <br></br>favorite Influencers,for free</h1>
            <img src="./images/spiralspring.png" alt="" />
            <a><button>Join Us</button></a>
        </div>
       
    </div>
    <div className='collabimage-brand'>
    <img src="./images/collabimage.png" alt="" />
    </div>
    </div>
  )
}

export default Collabbrand