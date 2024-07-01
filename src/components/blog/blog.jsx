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
        <h2 className='blog-heading'>Blogs</h2>
        <div className="content-blog">
            <div className="content1 ">
                <img src="./images/content1.png" alt="" />
                <p>TikTok Testing "Identify Similar Objects"
                Feature for In-Stream Shopping <br></br>
                <button className='readmore'>Read More</button></p>
            </div>
            <div className="content1 right " >
                <p>TikTok Testing "Identify Similar Objects"
                Feature for In-Stream Shopping <br></br>
               <button className='readmore'>Read More</button></p>
                <img src="./images/content1.png" alt="" />
            </div>
            <div className="content1" >
                <img src="./images/content1.png" alt="" />
                <p>TikTok Testing "Identify Similar Objects"
                Feature for In-Stream Shopping <br></br>
                <button className='readmore'>Read More</button></p>
            </div>
        </div>
    </div>
  )
}

export default Blog