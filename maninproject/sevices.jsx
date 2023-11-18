import React from "react"
import {BsCloudSun,BsSliders,BsFillGearFill} from 'react-icons/bs';
import './styles/services.css'
const Services = () => {
    return (
      <>

<div className="serve">
    <h5>what we serve</h5>
    <h2>We offer our <br /> best services</h2>

    </div>
  <div className="weather">
  <BsCloudSun className="cloud" />
  <h3>Calculate Weather</h3>
  <p>Lorem ipsum dolor sit amet,consectetur adipisicing   elit.Magnam<br /> et,  ipsum aut ad  nesciunt totam quam.</p>
</div>
<div className="guide">
<BsSliders className="cloud" />
  <h3>Best Tour Guide</h3>
  <p>Lorem ipsum dolor sit amet,consectetur adipisicing   elit.Magnam<br /> et,  ipsum aut ad  nesciunt totam quam.</p>
</div>
<div className="custmoization">
<BsFillGearFill className="cloud" />
  <h3>Customization</h3>
  <p>Lorem ipsum dolor sit amet,consectetur adipisicing   elit.Magnam<br /> et,  ipsum aut ad  nesciunt totam quam.</p>
</div>



      </>
    )
}

export default Services;