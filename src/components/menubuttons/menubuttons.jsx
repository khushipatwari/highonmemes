import React, { useState } from 'react'
import './menubuttons.css'
import Data from '../../../data'

const Menubuttonsfol = ( {menuItems,filterItems,setItem}) => {

  const [isActive, setIsActive] = useState(false)

  const [text,setText] = useState('select')

  const isClicked =(e)=>
    {
      setText(e.target.value),
      setIsActive(!isActive)
    }
  const isAll =(e) =>
    {
      isClicked(e),
      setItem(Data)
    }  
 
  return (
   <div className="filter-bar"> 
   <p className='filter-heading' 
   onClick={(e)=>setIsActive(!isActive)}>{text}</p>
     {
      isActive && (
      <div className='filter-dropdown-content'>
        {
            menuItems.map(val=>(
                <div className="filter-buttons" onClick={()=>filterItems(val) } >
                    <input type='button' value={val} onClick={ isClicked} className='filter-button-input' ></input>
                    {/* <label>{val}</label> */}
                </div>
            ))
          }
                   <input type='button' value='All' onClick={isAll}  className='filter-button-input'></input>
    </div>)
     }
   </div>
  )
}

export default Menubuttonsfol