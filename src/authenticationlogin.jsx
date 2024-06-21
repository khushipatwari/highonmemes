import React, { useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

import './authenticationlogin.css'




const AuthenticationLogin = () => {
  const navigate = useNavigate()


      const [input,setInput]= useState({
        // first_name:"",
        // last_name:"",
        email:"",
        password:"",
      })

      const changeHandler = (e)=>
        {
          setInput({
            ...input , 
            [e.target.name] : e.target.value,
          })
        }

        const handleLogin = () =>
          {
            e.preventDefault()
            const loggeduser = JSON.parse(localStorage.getItem("user"))
            if(
                input.email ===loggeduser.email && 
                input.password === loggeduser.password
            )
            {
                localStorage.setItem("loggedin",true)
                // navigate('/')
            }
            else 
            {
                alert('wrong Password')
            }
          }
  
  
          return (
  <div className='authpage'> 
   <div className='full-form'>
    <form className="form" onSubmit={handleLogin}>
    
     <p className="title">Login</p>
   
        
    <label>
        <input name="email" value={input.email} onChange={changeHandler} required placeholder="Email" type="email" class="input"/>
        {/* <span>Email</span> */}
    </label> 
    <label >
        <input  name="password"  value={input.password} onChange={changeHandler}required="" placeholder="Password" type="password" class="input"/>
        {/* <span>Password</span> */}
      
    </label>
    
      <p className="forget-in"><a>ForgetPassword</a></p>

<button className="submit" type='submit'>Submit</button>

    <p className="in">Dont have a account ?<Link to={'/authenticationsignup'}><a >Register</a> </Link> </p>

</form>
   </div>
   <div className='loginimage'>
    <img src="./images/logo-authentication.png" alt="" />
   </div>
  </div> 
       
  )
}

export default AuthenticationLogin