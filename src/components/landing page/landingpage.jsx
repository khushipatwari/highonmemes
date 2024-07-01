import './landingpage.css'


const Landingpage = () => {

  
  return (
    <div>
        <div className='container-landingpage'>
            <article>
                <h1 className='title-landingpage'> The <span>Leading</span> platform<br></br>
                     for aspiring<br></br>
                     <span>Content Creators
                     </span>&<br></br>
                     <span>Memers</span>
                </h1>
                <p>Collaborate with high-end brands, boost engagement,<br></br>
                and increase earnings.</p>
            </article>
            <section className='landingpagedesign'>
                <img src="./images/landingpagedesign.png" alt="" />
            </section>
        </div>
    </div>
  )
}

export default Landingpage