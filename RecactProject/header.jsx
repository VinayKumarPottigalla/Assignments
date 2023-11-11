import React from "react";
import { Link } from "react-router-dom";
import logo from './images/logo2.png';
import './style.css';

function Header(){
    return(
        <div className="header">
        <div className="head">
            <div className="logo">
             <img src={logo} alt="logo" /></div>

            <div  className="linksnav">
            
                    <Link  to="/home" >Home</Link>
                    <Link  to="/about">About</Link>
                    <Link  to="/tour">Tour</Link>
                    <Link to="/">Login</Link>

                    <Link to='/register'><button className="navbtn">Register</button></Link> </div>

                    </div>
                    </div>
        )
    }
export default Header;