import React, { useState } from 'react'
import Brandcard from './components/brandcards/brandcard'
import Navbar from './components/navbar/navbar'
import './collaborationhub.css'
import Search from './components/search/search'
import Data from '../data'
import Menubuttons from './components/menubuttons/menubuttons'



const Collaborationhub = () => {


  const [valSearch,setValSearch] = useState('')
   
    const [item,setItem] = useState(Data)
    // const menuItems = [ ...new Set(Data.map((val)=> val.category))]

    const filterItemsCat = (cat) =>{
        const newItemsCat = Data.filter((newval)=> newval.category ===cat)
        setItem(newItemsCat)
    }

    const filterItemsFol = (fol) =>{
      const newItemsFol = Data.filter((newval)=> newval.followers===fol)
      setItem(newItemsFol)
  }

  const filterItemsAge = (age) =>{
    const newItemsAge = Data.filter((newval)=> newval.age===age)
    setItem(newItemsAge)
}

const [list,setList]= useState( [ ...new Set(Data.map((val)=> val.category))])
// let list = [...new Set(Data.map((val)=> val.category))]
// console.log(list)
const [list1,setList1] =useState(list)


const filterSearch=(e)=>
  {
    // console.log(e.target.value)
    setValSearch(e.target.value)
    if(e.target.value)
      {
        let result = list.filter((list)=> list.includes(e.target.value))
        setList(result)
      }
      else
      {
        setList(list1)
      }
  }
  return (
    <div className=' container-collaboration'>
    {/* <Navbar></Navbar> */}
        <div className='background-section'>
          <div className='filter-section'>
            <div className='filter-section-heading'>Type</div>
            <Menubuttons menuItems={[...new Set(Data.map((val)=> val.category))] }
            filterItems={filterItemsCat}
            setItem={setItem}></Menubuttons>
              <div className='filter-section-heading'>Follwers</div>
            <Menubuttons menuItems={[...new Set(Data.map((val)=> val.followers))]}
            filterItems={filterItemsFol}
            setItem={setItem}></Menubuttons>
              <div className='filter-section-heading'>Age</div>
            <Menubuttons menuItems={[...new Set(Data.map((val)=> val.age))]}
            filterItems={filterItemsAge}
            setItem={setItem}></Menubuttons>
            {/* <Menubuttons menuItems={menuItems}
            filterItems={filterItems}
            setItem={setItem}></Menubuttons> */}

          </div>
            <div className='main-section'>
                <div className='collaboration-topsection'>
                       <div className='collaboration-writing'>
                           <h1 className='collaboration-heading'>Collaboration Hub</h1>
                           <div className='collaboration-description'>Explore endless partnership opportunities - from
                             paid campaigns to giveaways and<br></br>
                           affiliate programs. Opt in to campaigns you're interested in and track your progress!</div>
                           {/* <Search list={[ ...new Set(Data.map((val)=> val.category))]} onChange={(e)=> filterSearch(e)}></Search */}
                           <Search  list ={list} onChange={(e)=>filterSearch(e)} 
                           value={valSearch} setItem={setItem}
                           filterItems={filterItemsCat} ></Search>

                        </div>
                        <div className='collaboration-img'>
                           <img src="./images/collaboration-img.png" alt="" />
                         </div>
                </div>
                <div className='card-section'>
                    <Brandcard itemC={item}></Brandcard>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collaborationhub