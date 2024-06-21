import React, { useEffect } from 'react'
import './blog.css'
import AOS from 'aos'
import 'aos/dist/aos.css' 
const Blog = () => {
    
    useEffect(()=>{
        AOS.init({duration:600})
    })
    
  return (
    <div className='container-blog'>
        <div className="content-blog">
            <div className="content1 " data-aos='fade-right'>
                <img src="./images/content1.png" alt="" />
                <p>TikTok Testing "Identify Similar Objects"
                Feature for In-Stream Shopping <br></br>
                <a href="#"><button className='readmore'>Read More</button></a></p>
            </div>
            <div className="content1 right " data-aos='fade-left'>
                <p>TikTok Testing "Identify Similar Objects"
                Feature for In-Stream Shopping <br></br>
                <a href="#"><button className='readmore'>Read More</button></a></p>
                <img src="./images/content1.png" alt="" />
            </div>
            <div className="content1" data-aos='fade-right'>
                <img src="./images/content1.png" alt="" />
                <p>TikTok Testing "Identify Similar Objects"
                Feature for In-Stream Shopping <br></br>
                <a href="#"><button className='readmore'>Read More</button></a></p>
            </div>
        </div>
    </div>
  )
}

export default Blog