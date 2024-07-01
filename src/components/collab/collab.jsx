import React from 'react'
import './collab.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Collab = () => {

  return (
    <div>
      <div className='container-collab' data-aos='fade-up'>
        <div className='content'>
            <h1 className='collab-heading'>Start collaborating<br></br>
            with amazing brands</h1>
            <img src="./images/spiralspring.png" alt="" />
            <a><button>Join Us</button></a>
        </div>
       
    </div>
    <div className='collabimage'>
    <img src="./images/collabimage.png" alt="" />
    </div>
    </div>
  )
}

export default Collab