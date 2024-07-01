import React from 'react'
import Mainpage from './mainpage.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import Navbar from './components/navbar/navbar.jsx'
import { BrowserRouter, createBrowserRouter , RouterProvider, Routes,Route} from 'react-router-dom';

import Aboutus from './components/aboutus/aboutus.jsx'
import Contactus from './components/contactus/contactus.jsx'
import Brandpage from './brandpage.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'




const App = () => { 
  return (
    <div>

     <BrowserRouter>
     {/* <Navbar></Navbar> */}
     <Routes>
      <Route path='/' element={<Mainpage></Mainpage>} />
      <Route path='/mainpage' element={<Mainpage></Mainpage>} />
      <Route path='/brandpage' element={<Brandpage></Brandpage>} />
      <Route path='/aboutus' element={<Aboutus></Aboutus>}/>
      <Route path='/contactus' element={<Contactus></Contactus>}/>
      <Route path='/testimonials' element={<Testimonials></Testimonials>}/>

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App