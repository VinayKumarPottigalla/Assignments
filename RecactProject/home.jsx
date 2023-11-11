import React from "react";
import Footer from "./footer";
import logo from './images/logo2.png';
import { Link } from "react-router-dom";
import './style.css';
import  hero1 from './images/hero-img01.jpg';
//import hero2 from './images/hero-video.mp4';
import hero3 from './images/hero-img02.jpg';
import image1 from './images/tour-img01 .jpg';
import image2 from './images/tour-img02.jpg';
import image3 from './images/tour-img03.jpg';
import image4 from './images/tour-img04 .jpg';
import image5 from './images/tour-img05.jpg';
import image6 from './images/tour-img06 .jpg';
import image7 from './images/tour-img08.jpg';
import image8 from './images/tour-img06 .jpg';
import experience from './images/experience.png';
import photo1 from './images/gallery-01 - Copy.jpg';
import photo2 from './images/gallery-02 - Copy.jpg';
import photo3 from './images/gallery-03 - Copy.jpg';
import photo4 from './images/gallery-04.jpg';
import photo5 from './images/gallery-05.jpg';
import photo6 from './images/gallery-06.jpg';
import photo7 from './images/gallery-07.jpg';
import photo8 from './images/gallery-08.jpg';
import photo9 from './images/ava-1.jpg';
import photo10 from './images/ava-2.jpg';
import photo11 from './images/ava-3.jpg';
import tour from './images/male-tourist.png';
import {BsCloudSun,BsSliders,BsGeoAlt,BsCheckCircle,BsPeopleFill,BsSearch,BsFillGearFill} from "react-icons/bs";




function Home(){
    return(
        
        <div className="">
          
        <div className="bp">
        <img src={logo} alt="" />
        <div  className="linksnav">
            
            <Link  to="/home" >Home</Link>
            <Link  to="/about">About</Link>
            <Link  to="/tour">Tour</Link>
            <Link to='/CSS'><button className="navbtn">CSS</button></Link>
            <div className="btn2"><Link to='/logout'><button >Logout</button></Link></div>
             
            </div>
      
            </div>
            
            <div className="hero1">
                    <img src={hero1} alt="" />
                </div> 
                <div className="hero2" >
                    {/* <video src={require("./images/hero-video.mp4")} className="oject-fit-cover"  width="130px" height="300px"></video>  */}
                    <video className="mt-5 border border-warning ratio  " controls width="150px" height="350px" src={require('./images/hero-video.mp4')}></video>
                </div>
            <div className="knowbtn">
                <button>Know before you go</button>
            </div>
            <div className="hero3">
                    <img src={hero3} alt="hero3" />
                </div>
            
            <div className="doors">
                <h1>Travelling Opens <br /> the doors to <br />creating <a href="#">memories</a></h1>
                <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Perferendis rem facere <br />laudantium illo ducimus adipiscidolorem.<br />  Consequuntur  qui quodquae, possimus rem, <br />nobis fugiat quibusdam asperiores eum optio <br />consectetur laborum.</p>
                
            </div>

            <div className="location">
            <span>Location</span>
            </div>
            <BsGeoAlt className="loc" />

            <div className="distance">
            <span>Distance</span>
            </div>
            <BsCheckCircle className="dis" />

            <div className="people">
            <span>Max People</span>
            </div>
            <BsPeopleFill className="peo" />

            <div className="search-bar2">
              
            
    <input
      type="text"
      name="keyword"
      placeholder= "where are you going?"
      id="search-bar"
    />
    
  
    <input
      type="text"
      name="location"
      placeholder="Distance km/h"
      id="search-bar"
      
    />
    <input
      type="number"
      name="category"
      placeholder="0"
      
    />
    <button  className="btn"><BsSearch /></button>
  </div>

  <div className="serve">
    <h5>what we serve</h5>
    <h2>We offer our <br /> best services</h2>

    </div>
  <div className="weather">
  <BsCloudSun className="cloud" />
  <h3>Calculate Weather</h3>
  <p>Lorem ipsum dolor<br /> sit amet, consectetur <br />adipisicing elit. <br /> Magnam et, ipsum aut <br /> ad  nesciunt totam quam.</p>
</div>
<div className="guide">
<BsSliders className="cloud" />
  <h3>Best Tour Guide</h3>
  <p>Lorem ipsum dolor<br /> sit amet, consectetur <br />adipisicing elit. <br /> Magnam et, ipsum aut <br /> ad  nesciunt totam quam.</p>
</div>
<div className="custmoization">
<BsFillGearFill className="cloud" />
  <h3>Customization</h3>
  <p>Lorem ipsum dolor<br /> sit amet, consectetur <br />adipisicing elit. <br /> Magnam et, ipsum aut <br /> ad  nesciunt totam quam.</p>
</div>

<div className="explore">
    <button>Explore</button>
    <h2>Our featured tours</h2>
</div>

<div className="cards">
      <div className="card1">
        <img src={image1} alt="image1" />
        <p>Bangkok</p>
        <h4>Snowy Mountains, <br />Thailand</h4>
        <h3>$990/per <br />person
        <button>
          book<br /> now
        </button>
        </h3>
            </div>

            <div className="card1">
              <img src={image2} alt="image2" />
        <p>Tokyo</p>
        <h4>Snowy Mountains, <br />Thailand</h4>
        <h3>$990/per <br />person
        
        <button>
          book<br /> now
        </button>
        </h3>
            </div>

            <div className="card1">
              <img src={image3} alt="image3" />
        <p>Bali</p>
        <h4>Snowy Mountains, <br />Thailand</h4>
        <h3>$990/per <br />person
        <button>
          book<br /> now
        </button>
        </h3>
            </div>

            <div className="card1">
            <img src={image4} alt="image4" />
        <p>Paris</p>
        <h4>Snowy Mountains, <br />Thailand</h4>
        <h3>$990/per <br />person
        <button>
          book<br /> now
        </button>
        </h3>
            </div>
            </div>
<div className="card">
            <div className="card1">
            <img src={image5} alt="image5" />
        <p>Phuket</p>
        <h4>Snowy Mountains, <br />Thailand</h4>
        <h3>$990/per <br />person
        <button>
          book<br /> now
        </button>
        </h3>
            </div>

            <div className="card1">
            <img src={image6} alt="image6" />
        <p>London</p>
        <h4>Snowy Mountains, <br />Thailand</h4>
        <h3>$990/per <br />person
        <button>
          book<br /> now
        </button>
        </h3>
            </div>

            <div className="card1">
            <img src={image7} alt="image7" />
        <p>Bali</p>
        <h4>Snowy Mountains, <br />Thailand</h4>
        <h3>$990/per <br />person
        <button>
          book<br /> now
        </button>
        </h3>
            </div>

            <div className="card1">
            <img src={image8} alt="image8" />
        <p>London</p>
        <h4>Snowy Mountains, <br />Thailand</h4>
        <h3>$990/per <br />person
        <button>
          book <br />now
        </button>
        </h3>
        </div>
        </div>

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
  
  <Footer />
  </div>    
    )
}

export default Home;