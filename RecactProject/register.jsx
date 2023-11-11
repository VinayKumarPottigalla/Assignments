import React from "react";
// import register from './images/register.png';
import './style.css';
import register from './images/register.png';
import Header from "./header";
import Footer from "./footer";



function RegistrationForm(){
    
        return(
            
            <form>
                <Header />
                <div className="registration">
                    
    
            <div class="form-group">
            <h2>Register</h2>
                
                <input type="text" className="Name" name="email" placeholder="User Name" /> <br />

                <input type="email" class="form-control" name="email" placeholder="Email" /> <br />

                <input type="email" class="form-control" name="email" placeholder="Password" />  <br />

                <button>Create Account</button> 

                <h5>
                    Already have <br />an Account? <a href="#">Login</a>

                </h5>
                <div className="form-group2">
                <img src={register} alt="register" />
                </div>
            </div>
            </div>
            <Footer />
            </form>
            
        )
    }


export default RegistrationForm;