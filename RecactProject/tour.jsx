import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import logo from './images/logo2.png';
import Footer from "./footer";
import background from './images/tour.jpg';
import image1 from './images/tour-img01 .jpg';
import image2 from './images/tour-img02.jpg';
import image3 from './images/tour-img03.jpg';
import image4 from './images/tour-img04 .jpg';
import image5 from './images/tour-img05.jpg';
import image6 from './images/tour-img06 .jpg';
import image7 from './images/tour-img08.jpg';
import image8 from './images/tour-img06 .jpg';
import tour from './images/male-tourist.png'; 
import { BsSearch } from "react-icons/bs";


function Tour(){
    return(
      <div className="">
        <div className="bp">
        <img src={logo} alt="" />
        <div  className="linksnav">

        
            
            <Link  to="/home" >Home</Link>
            <Link  to="/about">About</Link>
            <Link  to="/tour">Tour</Link>
            <Link to="/">Login</Link>
            <Link to='/register'><button className="navbtn">Register</button></Link> 
            </div>
            </div>
        
      
      <div className="background">
      
          <img src={background} alt="background" />
          <h1 >All Tours</h1></div>
          
    <div className="search-bar">
    <input
      type="text"
      name="keyword"
      placeholder= "where are you going?"
      id="search-bar"
    />
    
  
    <input
      type="number"
      name="location"
      placeholder="Distance km/h"
      id="search-bar"
      
    />
    <input
      type="number"
      name="category"
      placeholder="0"
      
    />
    <button ><BsSearch /></button>
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
            
        <div className="pages">
          <Link><h2>1</h2></Link>
  
            <Link><h3>2</h3></Link></div>


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
export default Tour ;