import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';
import logo from './assets/logo2.png'

const About = () => {
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
    <Footer />
    </>
  )
}

export default About
