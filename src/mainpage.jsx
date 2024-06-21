import React from 'react'
import './mainpage.css'
import Navbar from './components/navbar/navbar'
import Landingpage from './components/landing page/landingpage'
import Features from './components/features/features'
import Collab from './components/collab/collab'
import Blog from './components/blog/blog'
import Footer from './components/footer/footer'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Collaborationhub from './collaborationhub'
import Authenticationlogin from './authenticationlogin'


const Mainpage = () => {


  
  return (
    
    <div className='body'>
        <Navbar></Navbar>
        <Landingpage></Landingpage>
        <Features></Features>
        <Collab></Collab>
        <Blog></Blog>
        <Footer></Footer>
       

    </div>
  )
}

export default Mainpage