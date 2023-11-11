import React from "react";
import logo2 from './images/logo2.png'
import { BsInstagram,BsLinkedin,BsGithub, BsPersonFillGear} from "react-icons/bs";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <div className="foot">
            <div className="logo2">
             <img src={logo2} alt="logo2" /></div>
             <div className="Lorem">
                <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />Ipsum,natus!</p>
                <div className="footericon">
               <BsInstagram className="git" /><BsLinkedin className="git" /><BsGithub className="git" /><BsPersonFillGear className="git" /></div>
                
             </div>
             <div className="Discover">
             <h3>Discover</h3>
                <Link to="/home">Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/tour"}>Tour</Link>
               
             </div>
             
             <div className="Quick">
             <h3>Quick Links</h3>
                <Link to="/gallery">Gallery</Link>
                <Link to="/">Login</Link>
                <Link to="register">Register</Link>
             </div>
             <div className="Contact">
                <h3>Contact</h3>
                <p>Address:Shimoga,Karnataka</p>
                <p>Phone:+91 8660435323</p>
                <p>Email:Vinaykumarpottigalla@gmsail.com</p>
                <p>Phone:+91 8660435323</p>

             </div>

             <div className="copyright">
                <p>Copyright 2023,Design and develop by Vinay</p>
             </div>
             </div>
)
}
export default Footer;