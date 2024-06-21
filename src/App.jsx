import React from 'react'
import Mainpage from './mainpage.jsx'
import Authenticationlogin from './authenticationlogin.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import Collaborationhub from './collaborationhub.jsx'
import Navbar from './components/navbar/navbar.jsx'
import { BrowserRouter, createBrowserRouter , RouterProvider, Routes,Route} from 'react-router-dom';
import AuthenticationSignUp from './authenticationsignup.jsx'




const App = () => {

  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<><Mainpage></Mainpage></>
  //   },
  //   { path:'/collaborationhub',
  //     element:<><Collaborationhub></Collaborationhub></>
  //   },
  //   { 
  //     path:'/authenticationlogin',
  //     element:<><Authenticationlogin></Authenticationlogin></>
  //   },
  // ])
 
  return (
    <div>

     <BrowserRouter>
     {/* <Navbar></Navbar> */}
     <Routes>
      <Route path='/' element={<Mainpage></Mainpage>} />
      {/* <Route path='/collaborationhub' element={<Collaborationhub></Collaborationhub>} /> */}
      <Route path='/authenticationlogin' element={<Authenticationlogin></Authenticationlogin>} />
      <Route path='/authenticationsignup' element={<AuthenticationSignUp></AuthenticationSignUp>} />
      <Route path='/mainpage' element={<Mainpage></Mainpage>} />

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App