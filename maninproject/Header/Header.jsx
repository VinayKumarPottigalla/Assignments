import React from "react";
import {Link} from "react-router-dom";
import './Header.css';
import logo from '../assets/logo2.png'
import Footer from "../Footer/Footer";



function Header (){
    return(
        <div className="headoptions">
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
            <button className="btn1"><Link to='/'>Login</Link> </button>
            <button className="btn2"><Link to='/Register'>Register</Link> </button>

            </div>
            </div>
            </div>
    )
}

export default Header;