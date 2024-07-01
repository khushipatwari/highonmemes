import React from 'react'
import { keyframes,css} from 'styled-components'
import './ourcommunity.css'

const Ourcommunity = () => {

    const row =
    [
        './images/Arlo.png',
        './images/Arlo.png',
        './images/Arlo.png',
        './images/Arlo.png',
        './images/Arlo.png',
        './images/Arlo.png',
        './images/Arlo.png'
    ]

  return (
        <div className='wrapper'>
            <h1 className='ourcommunity-heading'> Our <span className='our-heading'>Community</span></h1>
            <div className='marquee'>
                <div className='marqueegroup'>
                    {
                        row.map(el =>(
                            <div className='imagegroup'>
                                <img className='ourcommunity-image' src={el} alt="" />
                            </div>    
                        )
                        )
                    }
                </div>
                <div className='marqueegroup'>
                    {
                        row.map(el =>(
                            <div className='imagegroup'>
                                <img className='ourcommunity-image' src={el} alt="" />
                            </div>    
                        )
                        )
                    }
                </div>
            </div>
        </div>
  )
}

export default Ourcommunity