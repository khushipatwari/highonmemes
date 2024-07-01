import React from 'react'
import './mainpage.css'
import Navbar from './components/navbar/navbar'
import Blog from './components/blog/blog'
import Footer from './components/footer/footer'
import Ourcommunity from './components/ourcommunity/ourcommunity'
import Contactus from './components/contactus/contactus.jsx'
import Gettingstarted from './components/gettingstarted/gettingstarted.jsx'
import Landingpagebrand from './components/landingpagebrand/landingpagebrand.jsx'
import Collabbrand from './components/collabbrand/collabbrand.jsx'

const Brandpage = () => {


  
  return (
    
    <div className='body'>
        <Navbar></Navbar>
        <Landingpagebrand></Landingpagebrand>
        <Ourcommunity></Ourcommunity>
        <Gettingstarted></Gettingstarted>
        <Collabbrand></Collabbrand>
        <Blog></Blog>
        <Contactus></Contactus>
        <Footer></Footer>
       

    </div>
  )
}

export default Brandpage