import React, { useState } from 'react'
import './search.css'

const Search = ({onChange , list,valSearch , filterItems,setItem}) => {

  const [isActive, setIsActive] = useState(false)

  const [text,setText]= useState('Search bar')
  const isClicked =()=>
    {
      setIsActive(!isActive)
    }
  return (
    <div>
        <input type="text" 
        placeholder={text}
        className='searchbar'
        onChange={onChange} 
        value={valSearch} onClick={isClicked} />
         {
          isActive && (<div className='filter-dropdown-content'>
            {
                list.map(val=>(
                   <div value={valSearch} className='search-options' onClick={()=>[filterItems(val),setText(val)]}>{val}</div>
                ))
              }
              </div>)
          
         }

    </div>
  )
}

export default Search