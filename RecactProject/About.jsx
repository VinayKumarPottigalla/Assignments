import React from "react";
import Footer from "./footer";
import {Link} from "react-router-dom";
import logo from "./images/logo2.png"
function About(){
        return(
            <div className="bp">
            <img src={logo} alt="logo" />

            <div className="linksnav">
            <Link  to="/home" >Home</Link>
            <Link  to="/about">About</Link>
            <Link  to="/tour">Tour</Link>
            <Link to="/">Login</Link>
            <Link to='/register'><button className="navbtn">Register</button></Link>
</div>
                <div>
                    <h1>Welcome to About</h1>
                </div>

                
            
            <Footer />
            </div>
        )
}
export default  About;