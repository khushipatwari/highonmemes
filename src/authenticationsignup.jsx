import React, { useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

import './authenticationlogin.css'




const AuthenticationSignUp= () => {
  const navigate = useNavigate()


      const [input,setInput]= useState({
        first_name:"",
        last_name:"",
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

        const handleSubmit = (e) =>
          {
            e.preventDefault(),
            localStorage.setItem("user", JSON.stringify(input)),
            navigate('/authenticationlogin')
          }
  
  
          return (
  <div className='authpage'> 
   <div className='full-form'>
    <form className="form" onSubmit={handleSubmit}>
         <p className="title-login">Register </p> 
     <div class="flex">
          <label>
              <input name="first_name" value={input.first_name} onChange={changeHandler} required="" placeholder="First Name" type="text" class="input"/>
              {/* <span>Firstname</span> */}
          </label>
  
          <label>
              <input name="last_name" value={input.last_name} onChange={changeHandler} required="" placeholder="Last Name" type="text" class="input"/>
              {/* <span>Lastname</span> */}
          </label>
      </div>  
            
    <label>
        <input name="email" value={input.email} onChange={changeHandler} required placeholder="Email" type="email" class="input"/>
        {/* <span>Email</span> */}
    </label> 
    <label >
        <input  name="password"  value={input.password} onChange={changeHandler}required="" placeholder="Password" type="password" class="input"/>
        {/* <span>Password</span> */}
      
    </label>

<button className="submit" type='submit'>Submit</button>
<p className="in">Already have an acount ? <Link to={'/authenticationlogin'}><a>Login</a></Link> </p>
      

</form>
   </div>
   <div className='loginimage'>
    <img src="./images/logo-authentication.png" alt="" />
   </div>
  </div> 
       
  )
}

export default AuthenticationSignUp