import React from "react"
import './styles/experience.css'
import experience from './assets/experience.png'
import photo1 from './assets/gallery-01 - Copy.jpg'
import photo2 from './assets/gallery-02 - Copy.jpg'
import photo3 from './assets/gallery-03 - Copy.jpg'
import photo4 from './assets/gallery-04.jpg'
import photo5 from './assets/gallery-05.jpg'
import photo6 from './assets/gallery-06.jpg'
import photo7 from './assets/gallery-07.jpg'
import photo8 from './assets/gallery-08.jpg'
import photo9 from './assets/ava-1.jpg'
import photo10 from './assets/ava-2.jpg'
import photo11 from './assets/ava-3.jpg'
import tour from './assets/male-tourist.png'



const Experience = ()=>{
    return(
        <>
        <div className="experience">
        <button>Experience</button>
        <h2>With all experience <br />we will serve you</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Accusamus voluptas explicabo alias eaque adipisci quibusdam facilis </p>
    </div>
    <div className="experienceimg">
        <img src={experience} alt="" />
    </div>
    <div className="trips">
                <div className="k12">
        <h4>12K+</h4>
    </div>
    
    <div className="k2">
        <h4>2K+</h4>
    </div>
    <div className="e15">
        <h4>15</h4>
    </div>
    
    </div>
    <div className="successful">
    <h3>Successfull <br /> Trips</h3>
    </div>
    <div className="regular">
    <h3>Regular <br /> Clients</h3>
    </div>
    <div className="years">
    <h3>Years <br /> experience</h3>
    </div>
  <div className="gallery"><button>Gallery</button></div>

  <div className="visit">
    <h1>Visit our cutomerstour gallery</h1>
  </div>

  <div className="photos">
      <div className="photo1">
        <img src={photo1} alt="photo1" />
      </div>
      <div className="photo2">
        <img src={photo2} alt="photo2" />
      </div>
      <div className="photo3">
        <img src={photo3} alt="photo3" />
      </div>
      <div className="photo4">
        <img src={photo4} alt="photo4" />
      </div>
      </div>
      <div className="photos">
      <div className="photo5">
        <img src={photo5} alt="photo5" />
      </div>
      <div className="photo6">
        <img src={photo6} alt="photo6" />
      </div>
      <div className="photo7">
        <img src={photo7} alt="photo7" />
      </div>
      <div className="photo8">
        <img src={photo8} alt="photo8" />
      </div>
      </div>

      <div className="clinets">
        <button>Clinets Love</button>
        <h1>What our clients say about us</h1>
      </div>

        
  <div className="jhon">
  
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas deserunt odit velit quasi illum magnam provident, dolorem similique cupiditate in consequatur voluptates impedit suscipit alias hic, culpa error, ipsa quis?</p>
  <img src={photo9} alt="photo9" />
  <h3>Jhone Deo <br />customer</h3>
</div>

<div className="peter">
 
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas deserunt odit velit quasi illum magnam provident, dolorem similique cupiditate in consequatur voluptates impedit suscipit alias hic, culpa error, ipsa quis?</p>
  <img src={photo11} alt="photo9" />
  <h3>peter Alice <br />customer</h3>
</div>


<div className="cathrine">
 
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas deserunt odit velit quasi illum magnam provident, dolorem similique cupiditate in consequatur voluptates impedit suscipit alias hic, culpa error, ipsa quis?</p>
  <img src={photo10} alt="photo9" />
  <h3>peter Alice <br />customer</h3>
</div>

<div className="dots">
  <h1>...</h1>
</div> 



<div className="subscribe">
              <h3>Subscribe now for useful <br /> travelling information</h3>

              <div className="subsearch">
            <input
      type="email"
      name="category"
      placeholder="Enter your Email"
      
    />
    
    <button>Subscribe</button>
    <div className="maletourist">
    <img src={tour} alt="tour" />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Ut illo ad odit distinctio porro laborum. <br /> </p>
  </div> 
  </div>
  </div>
      <div>
        </div>
  </>
    )
}

export default Experience;