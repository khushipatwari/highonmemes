import React from 'react'
import './collab.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Collab = () => {

  return (
    <div className='container-collab' data-aos='fade-up'>
        <div className='content'>
            <h1>Start collaborating<br></br>
            with amazing brands</h1>
            <img src="./images/spiralspring.png" alt="" />
            <a><button>Collab</button></a>
        </div>
    </div>
  )
}

export default Collab