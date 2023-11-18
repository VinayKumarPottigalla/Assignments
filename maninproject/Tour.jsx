import React from "react";
import Services from './sevices';
import { useState } from 'react';
import data from './data';
import {BsGeoAlt,BsCheckCircle,BsPeopleFill, BsSearch,BsStar} from 'react-icons/bs';
import tour from './assets/tour.jpg'
import './styles/Tour.css'
import Footer from "./Footer/Footer";
import tour2 from './assets/male-tourist.png'
import { Link } from "react-router-dom";
import logo from './assets/logo2.png'


const Tour =() =>{

    const[filter,setFilter] = useState('');

    const searchText = (event) =>{
      setFilter(event.target.value);
  
    }
   let dataSearch = data.cardData.filter(item => {
    return Object.keys(item).some(key =>
    item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
     )
  
   })
   if (dataSearch.length === 0) {
    dataSearch = data.cardData;
  }
  
    return(
       <>

<div className="header">

{/* Logo Starts */}
<div className="logo">
    <img src={logo} alt="logo" />
</div>
{/* Logo Ends */}

<div  className="linksnav">

<Link  to="/Home" >Home</Link>
<Link  to="/About">About</Link>
<Link  to="/Tour">Tour</Link>

<button className="btn2"><Link to='/'>Logout</Link> </button>

</div>

</div>
      

       <div className="tour">
      
       <img src={tour} alt="background" />
</div>

       <div className="location">
            <span>Location</span>
            </div>
            <BsGeoAlt className="locs" />

            <div className="distance">
            <span>Distance</span>
            </div>
            <BsCheckCircle className="diss" />

            <div className="people">
            <span>Max People</span>
            </div>
            <BsPeopleFill className="peos" />

            <div className="search-bar2">
              
            
    <input
      type="text"
      name="keyword"
      placeholder= "where are you going?"
      id="search-bar"
      value={filter}
      onChange={searchText.bind(this)}
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
    <button  className="btn"><BsSearch/></button>
  </div>

  
 

  <div className='container'>
  {dataSearch.map((item, index) => (
    <div className='card' key={index}>
      <img src={item.img} alt="" />
      <div className='card-body'>
        
      <h3 className='ratings'><span className='star'><BsStar/></span>{item.rating}</h3>
      <h4 className='card-places'><span className='geo'><BsGeoAlt/></span>{item.place} </h4>
        <h6 className='titles'>{item.title}</h6>
      <button className='bookbtns'>Book <br /> Now</button>

        <h5 className='card-prices'>{item.price}</h5>
       
        
        <h3 className='persons'>/per <br />person</h3>

        

        
      </div>
    </div>
  ))}


     
      </div>

      <div>
        
      </div>
      <div className="onetwo">
      <div className="one">
      <h3 >1</h3> </div>
      <div className="two">
      <h3>2</h3>
      </div>
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
    <img src={tour2} alt="tour" />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Ut illo ad odit distinctio porro laborum. <br /> </p>
  </div> 
  </div>
  </div>
  <div className='footoptions'> <Footer /></div>
       </>
       
    )
    
}


export default Tour;