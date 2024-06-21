import React from 'react'
import './brandcard.css'

const Brandcard = ({itemC}) => {

  return (
    <div className='container-card'  >
       {itemC.map((val)=>(
          <div className='container-brandcard' key={val.id}>
            <div className='brandcard-heading'>
                  <h1 className='brandcard-title'>{val.title}</h1>
                  <p className='brandcard-description'>{val.description} </p>
                  <img src={val.imgSrc} alt=""  className='brandcard-img'/>
            </div>
            <div className='follower-container'>
              <div className='text'>Follower<span></span> {val.followers}</div>
              <div className='text'>Engagement<span></span> {val.engagement}</div>
              <div className='text'>Age<span></span> {val.age}</div>
              <div className='text'>Residency<span></span>{val.residency}</div>
            </div>
            <button className='brandcard-button'>learn more</button>
            </div>
       ))
       }
    </div>
  )
}

export default Brandcard