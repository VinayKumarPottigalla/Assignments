import React from 'react';
import './styles/Home.css'
//import Header from './Header/Header';
import Footer from './Footer/Footer';
import world from './assets/world.png'
import hero1 from './assets/hero-img01.jpg'
import hero2 from './assets/hero-video.mp4'
import hero3 from './assets/hero-img02.jpg'
import Searchbar from './searchbar';
import Experience from './experience';
import { Link } from 'react-router-dom';
import logo from './assets/logo2.png'
import { useState, useEffect} from 'react';
import Login from './Login';
import './Header/Header.css'


const Home = () => {
  
  
  
      
   
  return (
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

    <div className='hero1'>
            <img src={hero1} alt="hero1" />
          </div>
    <div className='head'>
        <div className='know_before'>
          <h3>Know before you go</h3>
          <img src={world} alt="world" />
        </div>
        <h1>Travelling opens <br /> the doors to <br /> creating <span className='highlight'>memories</span></h1>
        <p >Lorem ipsum dolor sit amet consecteturadipisicing  <br />  
        Dolores mollitia culpa, ratione voluptates, <br /> 
        iste adipisci  ipsam aperiam corrupti  minima officiis. 
        <br />Dolorem rem  ipsum, natus asperiores fuga neque <br />voluptatum dolores!</p>
    
        <div className='hero1'>
            <img src={hero1} alt="hero1" />
          </div>
          
          <div className='hero2'>
          <video className="mt-5 border border-warning ratio  " controls width="150px" height="800px" src={hero2}></video>
          </div>
          <div className="hero3">
                    <img src={hero3} alt="hero3" />
                </div>
                
                <Searchbar />
                <div>
                </div>
  </div>
        <Experience />
        <div className='footoptions'> <Footer /></div>
    </>
  )
}

export default Home;
