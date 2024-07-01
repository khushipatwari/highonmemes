
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './how.css'
import {  LiaChartBarSolid} from 'react-icons/lia';
import AOS from 'aos'
import 'aos/dist/aos.css' 


const How = () => {
  return (
    <div className='how-container'>
        <div className='how-heading'>
            <h2>How we make your experience <span style={{color:'rgb(208, 5, 5)'}}>THE BEST</span></h2>
        </div>
        <VerticalTimeline lineColor='black' animate={false}>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: '#ECE5FF', color: 'black'  , display:'flex',flexDirection:'column',alignItems:'center', borderRadius:'7%'}}
    contentArrowStyle={{ borderRight: '7px solid  #ECE5FF' }}
    date="2010 - 2011"
    iconStyle={{ background: '#ECE5FF', color: 'black'}}
  >
    <h3 className="vertical-timeline-element-title">Campaign Management</h3>

    <img src="./images/campaign-management.png" alt="" className='how-image' data-aos='zoom-in' />
    <p>
    Comprehensive campaign management, enabling easy monitor and tracking selected campaigns.
    </p>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: '#FFC4CA', color: '#fff' }}
    contentStyle={{ background: '#FFC4CA', color: 'black' , display:'flex',flexDirection:'column',alignItems:'center', borderRadius:'7%' }}
    contentArrowStyle={{ borderRight: '7px solid  #FFC4CA' }}
  >
    <h3 className="vertical-timeline-element-title">Insight Panel</h3>

    <img src="./images/insight-panel.png" alt="" className='how-image' data-aos='zoom-in' />
    <p>
    Access a panel to view and analyze campaign data, complete with detailed graphs and statistics.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: '#FFF1CC', color: '#fff' }}
    contentStyle={{ background: '#FFF1CC', color: 'black' , display:'flex',flexDirection:'column',alignItems:'center', borderRadius:'7%'}}
    contentArrowStyle={{ borderRight: '7px solid  #FFF1CC' }}
  >
    <h3 className="vertical-timeline-element-title">Show Creativity</h3>

    <img src="./images/show-creativity.png" alt="" className='how-image' data-aos='zoom-in' />
    <p>
    Platform where creators showcase creativity with memes, reels, posts, boosting brand engagement.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: '#DDF8E9', color: '#fff' }}
    contentStyle={{ background: '#DDF8E9', color: 'black', display:'flex',flexDirection:'column',alignItems:'center', borderRadius:'7%'}}
    contentArrowStyle={{ borderRight: '7px solid  #DDF8E9' }}
  >
    <h3 className="vertical-timeline-element-title">Diversity</h3>
    <img src="./images/discovery.png" alt="" className='how-image' data-aos='zoom-in' />
    <p>
    Explore diverse brand options across multiple categories, tailored to various preferences and needs
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  )
}

export default How