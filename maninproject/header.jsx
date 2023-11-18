import React from "react";
import './style.css';
import {Link} from "react-router-dom";



function Header (){
    return(
        <div className="header">
             <div  className="linksnav">
            
            <Link  to="/Home" >Home</Link>
            <Link  to="/About">About</Link>
            <Link  to="/Tour">Tour</Link>
            <Link to="/">Login</Link>

            <Link to='/register'><button className="navbtn">Register</button></Link> </div>

            </div>
    )
}

export default Header;