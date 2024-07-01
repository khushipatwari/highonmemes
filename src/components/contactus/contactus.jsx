import { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import './contactus.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IoIosArrowDropdownCircle } from "react-icons/io"; 

export default function Contact() {

    const[text,setText] = useState("I am");


  const {register, reset, handleSubmit} = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "5d07177a-28a7-467a-8937-7e9f5d633424";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });
  const [val,setVal]= useState()
  const [isActive, setIsActive] = useState(false)
  const isClicked =()=>
    {
      setIsActive(!isActive)
    }

  return (
    <div className="contactus-container">
        <div className="contactus-heading"> Contact Us</div>
        <div className="contactus-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="contactus-formsection">
        <input placeholder="Name" type="text" {...register("name", { required: true })}/>
        <input placeholder="Email" type="email" {...register("email", { required: true })}/>
        <div className="contactus-dropdown" >
         <input placeholder={text} type="text" value={val} {...register("I am", { required: true })}  onClick={isClicked} className="dropdown-input" />
        {
            isActive && (<div className='filter-dropdown-content' onClick={isClicked}>
                 <div value="Brand" className='seach-options' onClick={()=>[setText("I am a Creator ") , setVal(' I am Brand')]}> Brand</div>
                 <div value="Creator" className='seach-options' onClick={()=>[setText("I am a  BRAND") , setVal('I am Creator')]}> Creator</div>
                 <div value="None" className='seach-options' onClick={()=>[setText("None") , setVal('None')]}> None</div>
                  </div>)
        }
        </div>
        <textarea placeholder="Enter Message" {...register("message", { required: true })} className="textarea"></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <div className="contactus-image">
                <img src="./images/contacatus2.png" alt=""  data-aos='fade-left'/>
            </div>
        </div>
      <div>{result}</div>
  </div>
 );
}
