import React from 'react'
import Navbar from '../navbar/navbar'
import'./aboutus.css'
import Footer from '../footer/footer'

const Aboutus = () => {
  return (
    <div className='main-aboutus-container'>
        <Navbar></Navbar>
        <div className='main-aboutus-landing'>
            <div className='main-aboutus-landing-heading'>
                 <span>MAKING MARKETING </span> 
                 <span >&</span>
                 <span>CONTENT CREATING EASIER</span>  
            </div>
            <p className='main-aboutus-landing-description'>
            "Connecting brands with creators for impactful collaborations: brands boost their marketing,
            creators earn from their content."
            </p>
        </div>
        <div className='aboutus-container'>
            <div className='aboutus-description'>
            Welcome to High On Memes, where we transform brands through the magic of memes! Founded by IIT
             Roorke undergrads, we specialise in meme marketing, offering D2C brands innovative solutions in
              marketing, advertising, and brand identity. Our mission is to revolutionise marketing by making
               brands memorable in the digital landscape through humour and creativity. With our unique blend 
               of creativity and humour, we enhance brand visibility and engagement. Join us in shaping the 
               future of marketing, one meme at a time, and experience the power of compelling, relatable, and
                viral-worthy content.High On Memes Turning humour into high-impact marketing!
            </div>
            <div className='aboutus-section'>
                <div className='aboutus-heading'>
                    <img src="./images/aboutusheading.png" alt="" />
                </div>
                <div className='aboutus-image'>
                    <img src="./images/aboutusimage.png" alt="" />
                </div>
            </div>
        </div>
        <div className='founders-container'>
        <div className='founders-description-container'>
                <h2>Founders</h2>
                <div className='p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                     ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                     dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim 
                      justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis 
                      eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum 
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                       consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                        feugiat a,</div>
            </div>
            <div className='founder-image-container'>
                <div className='founders-image img-one'>
                    <img src="./images/founder-image.jpg" alt="" />
                </div>
                <div className='founders-image img-two '>
                    <img src="./images/founder-image.jpg" alt="" />
                </div>
                <div className='founders-image img-three'>
                    <img src="./images/founder-image.jpg" alt="" />
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Aboutus