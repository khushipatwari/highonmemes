import React from 'react'
import './features.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Features = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };
  return (
    <div className='background'>
        <h2 className='features-heading'> Why join the Creator
        Community?</h2>
         <Carousel responsive={responsive} className='carousel'>
        <div className='card 1 ' style={{marginLeft:'50px'}}>
                <img src="./images/card1.png" alt="" />
                <h1 className='title'>Earn more</h1>
                <p>Get paid by brands while earning influence tokens that you can redeem for more cool stuff</p>
        </div>
        <div className='card 2'>
                <img src="./images/card2.png" alt="" />
                <h1 className='title'>Grow</h1>
                <p>Access exclusive influencer events, and is counts on leading creator economy platforms to help you grow your personal brand</p>
        </div>
        <div className='card 3'>
                <img src="./images/card3.png" alt="" />
                <h1 className='title'>Connect</h1>
                <p>Join like minded creators and industry experts who want to help you get noticed and paid for creating stunning content</p>
        </div>
        <div className='card 4'>
                <img src="./images/card4.png" alt="" />
                <h1 className='title'>Collaborate</h1>
                <p>Find hundreds of influencer campaigns and affiliate programs from challenger brands and market leaders who want to work with you</p>
        </div>
</Carousel>
    </div>
  )
}

export default Features




