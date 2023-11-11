import React from "react";
import login from './images/login.png';
import './style.css';
import Header from "./header";
import Footer from "./footer";


function Loginform(){
    return(
        <form>
            <Header />
            <div className="registration">
        <div class="form-group">
        <h2>Login</h2>
            
            

            <input type="email" class="form-control" name="email" placeholder="Email" /> <br />

            <input type="email" class="form-control" name="Password" placeholder="Password" />  <br />

            <button>Login</button> 

            </div>
            <div  className="form-group3">
                <img src={login} alt="register" />
            </div>
            </div>
            <Footer />
            </form>
                )
}

export default Loginform;